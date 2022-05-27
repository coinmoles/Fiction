import Phaser from 'phaser';
import { eventMap } from '~/assets/event/eventMap';
import { portal } from '~/assets/mapChange/portal';
import { towerOpenSesame } from '~/assets/mapChange/towerOpenSesame';
import { mapLoader } from '~/assets/map/mapLoader';
import { mapMap } from '~/assets/map/mapMap';
import { mapChanger } from '~/functions/mapChanger';
import { globals } from '~/globals';
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
import { COLUMNS, ROWS, TILESIZE } from '~/util/scaleConstants';

interface PropsNull {
    initiated: false
}

interface PropsInitiated {
    initiated: true
    mapId: MapId
    mapData: MapData
    playerInitLoc: vector
}

interface GameStuffNull {
    created: false
}

interface GameStuffLoaded {
    created: true
    player: Player
    creatures: MapObject[]
    map: MapObject[][]
    textArea: TextArea
    willPower: WillPower
    tileData: TileData[][]
    keyW: Phaser.Input.Keyboard.Key
    keyS: Phaser.Input.Keyboard.Key
    keyA: Phaser.Input.Keyboard.Key
    keyD: Phaser.Input.Keyboard.Key
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

    private playerMovementTimer = 0;
    private creatureMovementTimer = 0;
    private damageTimer = 0;

    private _moveCounter = 0;

    constructor() {
        super({ key: "game" });
    }

    init(data: { mapId: MapId, playerInitLoc: vector }) {
        const { mapId, playerInitLoc } = data;
        const mapData = mapMap.get(mapId);
        if (!mapData)
            return;

        this.props = { initiated: true, mapId, mapData, playerInitLoc };

        this._moveCounter = 0;
    }

    preload() {
        if (!this.props.initiated)
            return;

        this.props.mapData.textureMap.forEach((value, key) => {
            this.load.image(key, value);
        });
    }

    create() {
        if (!this.props.initiated)
            return;

        let tileData = this.props.mapData.tiles.map((tileRow) =>
            tileRow.map(tile => mapLoader(tile))
        );

        const player = new Player(this, this.props.playerInitLoc, "mi", []);
        const creatures: MapObject[] = []
        for (let creatureData of this.props.mapData.creatureData) {
            creatures.push(new Creature(this, creatureData.mapX, creatureData.mapY, creatureData.texture, creatureData.movements));
        }
        const map: MapObject[][] = []
        for (let i = 0; i < ROWS; i++) {
            let blockRow: MapObject[] = []
            for (let j = 0; j < COLUMNS; j++) {
                blockRow.push(new MapObject(this, j, i, tileData[i][j].texture).setDepth(1));
            }
            map.push(blockRow);
        }
        const textArea = new TextArea(this, []);
        const willPower = new WillPower(this);

        const keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        const keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        const keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        const keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.gameStuff = {
            created: true, player, creatures, map, textArea, willPower, tileData, keyW, keyS, keyA, keyD
        }

        this.handleWorldEvent(`${this.props.mapId}story`);
    }

    update(time: number, delta: number): void {
        if (!this.gameStuff.created || !this.props.initiated)
            return;

        const timeStopped = this.timeStopped();

        if (timeStopped === "stop")
            return;

        if (this.creatureMovementTimer > 0)
            this.creatureMovementTimer -= delta;
        if (this.creatureMovementTimer <= 0)
            this.turnAction(timeStopped);

        if (timeStopped === "running") {
            if (this.playerMovementTimer > 0)
                this.playerMovementTimer -= delta;

            if (this.playerMovementTimer <= 0)
                if (this.gameStuff.keyW.isDown)
                    this.handleMovement({ mapX: 0, mapY: -1 });
                else if (this.gameStuff.keyS.isDown)
                    this.handleMovement({ mapX: 0, mapY: 1 });
                else if (this.gameStuff.keyA.isDown)
                    this.handleMovement({ mapX: -1, mapY: 0 });
                else if (this.gameStuff.keyD.isDown)
                    this.handleMovement({ mapX: 1, mapY: 0 });


            if (this.damageTimer > 0) {
                this.gameStuff.player.setAlpha((this.gameStuff.player.alpha + 0.05) % 1)
                this.damageTimer -= delta;
            }

            if (this.damageTimer <= 0) {
                this.gameStuff.player.setAlpha(1)
                for (let creature of this.gameStuff.creatures) {
                    if (this.gameStuff.player.collide(creature)) {
                        globals.playerWill -= 1;
                        this.gameStuff.willPower.updateWillPower();
                        this.damageTimer = GLOBALTIME * 5;
                        break;
                    }
                }
            }
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

        const newVector: vector = {
            mapX: this.gameStuff.player.mapX + movement.mapX,
            mapY: this.gameStuff.player.mapY + movement.mapY
        }
        if (newVector.mapX < 0) { // 왼쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.w;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: COLUMNS - 1, mapY: this.gameStuff.player.mapY }
                });
        }
        else if (newVector.mapX >= COLUMNS) { // 오른쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.e;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: 0, mapY: this.gameStuff.player.mapY }
                });
        }
        else if (newVector.mapY < 0) { // 위쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.n;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: this.gameStuff.player.mapX, mapY: ROWS - 1 }
                });
        }
        else if (newVector.mapY >= ROWS) { // 아래쪽 맵으로 이동
            let mapId = this.props.mapData.distantMaps.s;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: this.gameStuff.player.mapX, mapY: 0 }
                });
        }
        else if (!this.gameStuff.tileData[newVector.mapY][newVector.mapX].passable) // 이동 불가능한 경우
            return;
        else { // 정상 이동 경우
            const newTile = this.gameStuff.tileData[newVector.mapY][newVector.mapX];
            const w = newTile.warp;

            if (w && mapMap.get(w.mapId)) {
                setTimeout(() => {
                    this.scene.start("game", {
                        mapId: w.mapId,
                        playerInitLoc: w.initialLoc
                    });
                }, GLOBALTIME);
            }

            console.log(newTile.event);
            for (const e of newTile.event)
                setTimeout(() =>
                    this.handleWorldEvent(e)
                    , GLOBALTIME);
            this.gameStuff.player.move(movement);
            this.playerMovementTimer = GLOBALTIME;
        }
    }

    handleWorldEvent(eventId: EventId) {
        if (!this.gameStuff.created)
            return;
        if (!this.props.initiated)
            return;
        if (globals.eventsTriggered.includes(eventId))
            return;

        globals.eventsTriggered.push(eventId);

        const eventData = eventMap.get(eventId)

        if (!eventData)
            return;

        this.eventStuff = {
            eventRunning: true,
            eventData,
            startTime: this._moveCounter
        };

        this.gameStuff.textArea.appendTexts
        this.gameStuff.player.addMovement(this, eventData.playerMovement);
        
        // if (eventId === "towerOpenSesame") {
        //     towerOpenSesame(this.gameStuff.textArea);
        //     this.reloadMap();
        // }
        // if (eventId === "portal") {
        //     portal(this.gameStuff.textArea);
        //     this.reloadMap();
        // }
    };

    timeStopped(): "stop" | "event" | "running" {

        if (this.gameStuff.created === false)
            return "stop";

        const textArea = this.gameStuff.textArea;

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

    turnAction(timeStopped: "event" | "running"): void {
        if (this.gameStuff.created === false)
            return;
        if (!this.props.initiated)
            return;

        if (timeStopped === "event" && this.eventStuff.eventRunning) {
            const eventData = this.eventStuff.eventData;
            const startTime = this.eventStuff.startTime;

            const filteredScenes = eventData.textData.filter(textData =>
                !textData.appearsAt || textData.appearsAt === this._moveCounter - startTime);
            eventData.textData = eventData.textData.filter(textData =>
                textData.appearsAt && textData.appearsAt !== this._moveCounter - startTime);
            console.log(this.eventStuff.eventData.textData);
            let added = filteredScenes.length > 0

            for (let textData of filteredScenes)
                this.gameStuff.textArea.appendTexts(textData);

            const filteredMapChange = eventData.mapChange.filter(mapChange =>
                mapChange.appearsAt === this._moveCounter - startTime
            )
            eventData.mapChange = eventData.mapChange.filter(mapChange =>
                mapChange.appearsAt !== this._moveCounter - startTime)
            for (let i = 0; i < filteredMapChange.length; i++)
                mapChanger(this.props.mapData);
            this.reloadMap();

            if (added)
                return;

            this.gameStuff.player.turnAction();
        }

        if (this.eventStuff.eventRunning &&
            this._moveCounter - this.eventStuff.startTime >= (this.eventStuff.eventData.endsAt ?? 0)) {
            this.eventStuff = { eventRunning: false };
        }

        for (let mapObject of this.gameStuff.creatures) {
            if (mapObject !== this.gameStuff.player)
                mapObject.turnAction();
        }

        this._moveCounter += 1;
        this.creatureMovementTimer = GLOBALTIME;
    }
}
