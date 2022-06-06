import Phaser from 'phaser';
import { eventMap } from '~/assets/event/eventMap';
import { mapLoader } from '~/assets/map/mapLoader';
import { mapMap } from '~/assets/map/mapMap';
import { mapChanger } from '~/functions/mapChanger';
import { globals } from '~/util/globals';
import { Creature } from '~/objects/Creature';
import { MapObject } from '~/objects/MapObject';
import { Player } from '~/objects/Player';
import { TextArea } from '~/objects/TextArea';
import { WillPower } from '~/objects/WillPower';
import { GLOBALTIME } from '~/util/constants';
import { EventData } from '~/util/interface/EventData';
import { EventId } from '~/util/interface/EventId';
import { MapData } from '~/util/interface/MapData';
import { MapId } from '~/util/interface/MapId';
import { TileData } from '~/util/interface/TileData';
import { vector } from '~/util/interface/vector';
import { COLUMNS, GAMEHEIGHT, GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from '~/util/scaleConstants';
import { cloneDeep } from "lodash"
import { Controls } from '~/objects/Controls';

interface PropsNull {
    initiated: false
}

interface PropsInitiated {
    initiated: true
    mapId: MapId
    mapData: MapData
    playerInitLoc: vector
    playerInitAnim: string
}

interface GameStuffNull {
    created: false
}

interface GameStuffLoaded {
    created: true
    player: Player
    creatures: Creature[]
    map: MapObject[][]
    darkArea: Phaser.GameObjects.Rectangle | null
    textArea: TextArea
    willPower: WillPower
    tileData: TileData[][]
    controls: Controls
}


interface EventStuffNull {
    eventRunning: false
}

interface EventStuffRunning {
    eventRunning: true
    startTime: number
    eventData: EventData
}

export default class GameScene extends Phaser.Scene {
    private props: PropsInitiated | PropsNull = {
        initiated: false
    }
    private gameStuff: GameStuffLoaded | GameStuffNull = {
        created: false
    }
    private eventStuff: EventStuffNull | EventStuffRunning = {
        eventRunning: false
    }

    private logMovementTimer = 0;
    private textTimer = 0;
    private playerMovementTimer = 0;
    private creatureMovementTimer = 0;
    private damageTimer = 0;

    private _moveCounter = 0;

    constructor() {
        super({ key: "game" });
    }

    init(data: { mapId: MapId, playerInitLoc: vector, playerInitAnim: string }) {
        const { mapId, playerInitLoc, playerInitAnim } = data;
        const mapData = mapMap.get(mapId);
        if (!mapData)
            return;


        this.props = { initiated: true, mapId, mapData, playerInitLoc, playerInitAnim };

        this._moveCounter = 0;
        this.eventStuff = { eventRunning: false }
    }

    preload() {
        if (!this.props.initiated)
            return;

        this.props.mapData.textureMap.forEach((value, key) => {
            if (typeof value === "string")
                this.load.image(key, value);
            else
                this.load.atlas(key, ...value)
        });
    }

    create() {
        if (!this.props.initiated)
            return;

        let tileData = this.props.mapData.tiles.map((tileRow) =>
            tileRow.map(tile => mapLoader(tile))
        );

        const player = new Player(this, this.props.playerInitLoc, [], this.props.playerInitAnim);
        const creatures: Creature[] = []
        for (let creatureData of this.props.mapData.creatureData) {
            creatures.push(new Creature(this, creatureData));
        }
        const map: MapObject[][] = []
        for (let i = 0; i < ROWS; i++) {
            let blockRow: MapObject[] = []
            for (let j = 0; j < COLUMNS; j++) {
                blockRow.push(new MapObject(this, j, i, tileData[i][j].texture).setDepth(1));
            }
            map.push(blockRow);
        }

        let darkArea: Phaser.GameObjects.Rectangle | null = null;
        if (this.props.mapData.darkness) {
            darkArea = new Phaser.GameObjects.Rectangle(
                this,
                ORIGINX, ORIGINY,
                GAMEWIDTH, GAMEHEIGHT - 2 * TILESIZE,
                0, 0.7)
                .setDepth(4).setOrigin(0, 0);
            this.add.existing(darkArea);
        }

        const textArea = new TextArea(this, []);
        const willPower = new WillPower(this);
        const controls = new Controls(this, true);

        this.gameStuff = {
            created: true,
            player,
            creatures,
            map,
            darkArea,
            textArea,
            willPower,
            tileData,
            controls
        }

        this.handleWorldEvent(`${this.props.mapId}story`);
    }

    // updates
    update(time: number, delta: number): void {
        if (!this.gameStuff.created || !this.props.initiated)
            return;

        const timeStopped = this.timeStopped();


        if (this.gameStuff.controls.checkShift())
            this.gameStuff.textArea.toggleLog(true);

        if (timeStopped === "log") {
            this.logUpdate(delta);
            return;
        }

        if (this.textTimer > 0)
            this.textTimer -= delta;
        if (this.textTimer <= 0) {
            if (this.gameStuff.controls.checkEnter()) {
                if (this.gameStuff.textArea.currentText !== null)
                    this.gameStuff.textArea.skipTexts()
                else if (this.gameStuff.textArea.currentText === null)
                    this.gameStuff.textArea.nextTexts()
            }
            this.textTimer = GLOBALTIME / 4
        }

        if (timeStopped === "stop")
            return;

        if (this.creatureMovementTimer > 0)
            this.creatureMovementTimer -= delta;
        if (this.creatureMovementTimer <= 0)
            this.turnAction(timeStopped);

        if (timeStopped === "running")
            this.runUpdate(delta);
    }

    logUpdate(delta: number) {
        if (!this.gameStuff.created || !this.props.initiated)
            return;

        if (this.gameStuff.controls.checkEsc())
            this.gameStuff.textArea.toggleLog(false);

        if (this.logMovementTimer > 0)
            this.logMovementTimer -= delta;
        if (this.logMovementTimer <= 0) {
            if (this.gameStuff.controls.checkUp())
                this.gameStuff.textArea.changeLog(-1);
            else if (this.gameStuff.controls.checkDown())
                this.gameStuff.textArea.changeLog(1);

            this.logMovementTimer = GLOBALTIME / 4;
        }
    }

    runUpdate(delta: number) {
        if (!this.gameStuff.created || !this.props.initiated)
            return;

        if (this.gameStuff.controls.checkEnter()) {
            if (this.gameStuff.textArea.currentText === null)
                this.gameStuff.textArea.nextTexts();
            else
                this.gameStuff.textArea.skipTexts();
        }

        if (this.playerMovementTimer > 0)
            this.playerMovementTimer -= delta;

        if (this.playerMovementTimer <= 0)
            if (this.gameStuff.controls.checkUp())
                this.handleMovement({ mapX: 0, mapY: -1 });
            else if (this.gameStuff.controls.checkDown())
                this.handleMovement({ mapX: 0, mapY: 1 });
            else if (this.gameStuff.controls.checkLeft())
                this.handleMovement({ mapX: -1, mapY: 0 });
            else if (this.gameStuff.controls.checkRight())
                this.handleMovement({ mapX: 1, mapY: 0 });


        if (this.damageTimer > 0) {
            this.gameStuff.player.setAlpha((this.gameStuff.player.alpha + 0.05) % 1)
            this.damageTimer -= delta;
        }

        if (this.damageTimer <= 0) {
            this.gameStuff.player.setAlpha(1)
            for (let creature of this.gameStuff.creatures.filter(creature => creature.alive)) {
                if (this.gameStuff.player.collide(creature)) {
                    globals.playerWill -= 1;
                    this.gameStuff.willPower.updateWillPower();
                    this.damageTimer = GLOBALTIME * 5;
                    break;
                }
            }
        }
    }

    turnAction(timeStopped: "event" | "running"): void {
        if (!this.gameStuff.created || !this.props.initiated)
            return;

        if (timeStopped === "event" && this.eventStuff.eventRunning) {
            const added = this.eventTurnAction()

            if (added)
                return;
        }

        this.checkEventEnd();

        for (let mapObject of this.gameStuff.creatures) {
            if (mapObject !== this.gameStuff.player)
                mapObject.turnAction();
        }

        this._moveCounter += 1;
        this.creatureMovementTimer = GLOBALTIME;
    }

    eventTurnAction(): void | true {
        if (!this.gameStuff.created || !this.props.initiated || !this.eventStuff.eventRunning)
            return;

        const eventData = this.eventStuff.eventData;
        const startTime = this.eventStuff.startTime;

        // Adds text
        const filteredScenes = eventData.textData.filter(textData =>
            !textData.appearsAt || textData.appearsAt === this._moveCounter - startTime);
        eventData.textData = eventData.textData.filter(textData =>
            textData.appearsAt && textData.appearsAt !== this._moveCounter - startTime);
        let added = filteredScenes.length > 0

        for (let textData of filteredScenes)
            this.gameStuff.textArea.appendTexts(textData);

        // Changes map
        const filteredMapChange = eventData.mapChange.filter(mapChange =>
            mapChange.appearsAt === this._moveCounter - startTime
        )
        eventData.mapChange = eventData.mapChange.filter(mapChange =>
            mapChange.appearsAt !== this._moveCounter - startTime)
        for (let i = 0; i < filteredMapChange.length; i++)
            mapChanger(this.props.mapData);
        this.reloadMap();

        // Spawns creatures
        const filteredCreatures = eventData.creatures.filter(creature =>
            !creature.appearsAt || creature.appearsAt === this._moveCounter - startTime);
        eventData.creatures = eventData.creatures.filter(creature =>
            creature.appearsAt && creature.appearsAt !== this._moveCounter - startTime);
        for (let { creatureData } of filteredCreatures) {
            this.gameStuff.creatures.push(new Creature(this, creatureData));
        }

        if (added)
            return true;

        this.gameStuff.player.turnAction();
    }

    checkEventEnd() {
        if (this.eventStuff.eventRunning &&
            this._moveCounter - this.eventStuff.startTime >= (this.eventStuff.eventData.endsAt ?? 0)) {
            if (this.eventStuff.eventData.warps)
                this.scene.start("game", this.eventStuff.eventData.warps);
            else if (this.eventStuff.eventData.end) {
                if (this.eventStuff.eventData.end === "TrueEnd") {
                    globals.clear = true;
                    this.scene.start("end", { type: "True" });
                }
                else if (this.eventStuff.eventData.end === "BadEnd")
                    this.scene.start("end", { type: "Bad" });
            }
            else
                this.eventStuff = { eventRunning: false };
        }
    }

    reloadMap() {
        if (!this.gameStuff.created)
            return;
        if (!this.props.initiated)
            return;

        this.gameStuff.tileData = this.props.mapData.tiles.map((tileRow) =>
            tileRow.map(tile => mapLoader(tile))
        )

        for (let i = 0; i < ROWS; i++)
            for (let j = 0; j < COLUMNS; j++)
                if (this.gameStuff.map[i][j].texture.key !== this.gameStuff.tileData[i][j].texture) {
                    this.gameStuff.map[i][j].setTexture(this.gameStuff.tileData[i][j].texture);
                    this.gameStuff.map[i][j].setScale(TILESIZE / this.gameStuff.map[i][j].width);
                }
    }

    handleMovement(movement: vector): void {
        if (!this.gameStuff.created)
            return;
        if (!this.props.initiated)
            return;

        this.playerMovementTimer = GLOBALTIME;
        const newVector: vector = {
            mapX: Math.floor(this.gameStuff.player.mapX + movement.mapX),
            mapY: Math.floor(this.gameStuff.player.mapY + movement.mapY)
        }
        if (newVector.mapX < 0) { // 왼쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.w;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: COLUMNS - 1, mapY: this.gameStuff.player.mapY },
                    playerInitAnim: "leftIdle"
                });
            else
                this.gameStuff.player.move(movement, false);
        }
        else if (newVector.mapX >= COLUMNS) { // 오른쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.e;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: 0, mapY: this.gameStuff.player.mapY },
                    playerInitAnim: "rightIdle"
                });
            else
                this.gameStuff.player.move(movement, false);

        }
        else if (newVector.mapY < 0) { // 위쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.n;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: this.gameStuff.player.mapX, mapY: ROWS - 1 },
                    playerInitAnim: "backIdle"
                });
            else
                this.gameStuff.player.move(movement, false);

        }
        else if (newVector.mapY >= ROWS) { // 아래쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.s;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: this.gameStuff.player.mapX, mapY: 0 },
                    playerInitAnim: "frontIdle"
                });
            else
                this.gameStuff.player.move(movement, false);

        }
        else if (!this.gameStuff.tileData[newVector.mapY][newVector.mapX].passable) {
            this.gameStuff.player.move(movement, false);
            this.playerMovementTimer = GLOBALTIME;
        }
        else { // 정상 이동 경우
            const newTile = this.gameStuff.tileData[newVector.mapY][newVector.mapX];

            for (const e of newTile.event)
                setTimeout(() =>
                    this.handleWorldEvent(e)
                    , GLOBALTIME - 50);
            this.gameStuff.player.move(movement, true);
            this.playerMovementTimer = GLOBALTIME;
        }
    }

    handleWorldEvent(eventId: EventId) {
        if (!this.gameStuff.created)
            return;
        if (!this.props.initiated)
            return;
        if (globals.eventsTriggered.includes(eventId)) {
            if (eventId !== "enterCastle" && eventId !== "exitCastle" && eventId !== "fireball")
                return;
        }
        else
            globals.eventsTriggered.push(eventId);

        const eventData = cloneDeep(eventMap.get(eventId));

        if (!eventData)
            return;

        if (eventData?.badEndCheck && globals.playerWill <= 0) {
            this.handleWorldEvent("cantgo");
            return;
        }

        this.eventStuff = {
            eventRunning: true,
            eventData,
            startTime: this._moveCounter
        };

        this.gameStuff.player.addMovement(this, eventData.playerMovement);
    };

    timeStopped(): "log" | "stop" | "event" | "running" {
        if (this.gameStuff.created === false)
            return "stop";

        const textArea = this.gameStuff.textArea;

        if (textArea.logOn)
            return "log"
        if (this.eventStuff.eventRunning)
            if (this._moveCounter - this.eventStuff.startTime >= textArea.lastLimits
                && textArea.lastStopTime)
                return "stop";
            else
                return "event";
        else if (textArea.lastStopTime)
            return "stop";
        else
            return "running"
    }

    get moveCounter() {
        return this._moveCounter;
    }


}
