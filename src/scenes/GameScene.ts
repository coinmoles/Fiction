import Phaser from 'phaser';
import { towerOpenSesame } from '~/assets/events/towerOpenSesame';
import { mapLoader } from '~/assets/map/mapLoader';
import { mapMap } from '~/assets/map/mapMap';
import { globals } from '~/globals';
import { Creature } from '~/objects/Creature';
import { MapObject } from '~/objects/MapObject';
import { Player } from '~/objects/Player';
import { TextArea } from '~/objects/TextArea';
import { WillPower } from '~/objects/WillPower';
import { GLOBALTIME } from '~/util/constants';
import { EventId } from '~/util/interface/EventId';
import { MapData } from '~/util/interface/MapData';
import { MapId } from '~/util/interface/MapId';
import { TileData } from '~/util/interface/TileData';
import { vector } from '~/util/interface/vector';
import { COLUMNS, ROWS } from '~/util/scaleConstants';

interface GameComponentsNull {
    created: false
}

interface GameComponentsLoaded {
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

export default class GameScene extends Phaser.Scene {
    private mapId: MapId | null = null;
    private mapData: MapData | null = null;
    private gameComponents: GameComponentsLoaded | GameComponentsNull = {
        created: false
    }

    private playerInitLoc: vector | null = null;

    private playerMovementTimer = 0;
    private creatureMovementTimer = 0;
    private damageTimer = 0;
    private _moveCounter = 0;

    private cutsceneRunning = false;

    constructor() {
        super({ key: "game" });
    }

    init(data: { mapId: MapId, playerInitLoc: vector }) {
        this.mapId = data.mapId;
        this.mapData = mapMap.get(data.mapId)!;
        this.playerInitLoc = data.playerInitLoc;
        this._moveCounter = 0;
    }

    preload() {
        if (!this.mapData)
            return;
        this.mapData.textureMap.forEach((value, key) => {
            this.load.image(key, value);
        });
    }

    create() {
        if (!this.mapId || !this.mapData || !this.playerInitLoc)
            return;

        let tileData = this.mapData.tiles.map((tileRow) =>
            tileRow.map(tile => mapLoader(tile))
        );

        const player = new Player(this, this.playerInitLoc.mapX, this.playerInitLoc.mapY, "mi", []);
        const creatures: MapObject[] = []
        for (let creatureData of this.mapData.creatureData) {
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

        this.gameComponents = {
            created: true, player, creatures, map, textArea, willPower, tileData, keyW, keyS, keyA, keyD
        }

        if (this.mapData.cutscene) {
            this.cutsceneRunning = true;
            this.gameComponents.player.addMovement(this, this.mapData.cutscene.playerMovement);
        }
        else {
            this.handleWorldEvent(`${this.mapId}story`);
        }
    }

    update(time: number, delta: number): void {
        if (!this.gameComponents.created || !this.mapData)
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
                if (this.gameComponents.keyW.isDown)
                    this.handleMovement({ mapX: 0, mapY: -1 });
                else if (this.gameComponents.keyS.isDown)
                    this.handleMovement({ mapX: 0, mapY: 1 });
                else if (this.gameComponents.keyA.isDown)
                    this.handleMovement({ mapX: -1, mapY: 0 });
                else if (this.gameComponents.keyD.isDown)
                    this.handleMovement({ mapX: 1, mapY: 0 });


            if (this.damageTimer > 0) {
                this.gameComponents.player.setAlpha((this.gameComponents.player.alpha + 0.05) % 1)
                this.damageTimer -= delta;
            }

            if (this.damageTimer <= 0) {
                this.gameComponents.player.setAlpha(1)
                for (let creature of this.gameComponents.creatures) {
                    if (this.gameComponents.player.collide(creature)) {
                        globals.playerWill -= 1;
                        this.gameComponents.willPower.updateWillPower();
                        this.damageTimer = GLOBALTIME * 5;
                        break;
                    }
                }
            }
        }
    }

    reloadMap() {
        if (!this.gameComponents.created)
            return;
        if (!this.mapId)
            return;
        if (!this.mapData)
            return;

        this.mapData.textureMap.forEach((value, key) => {
            this.load.image(key, value);
        });
        this.gameComponents.tileData = this.mapData.tiles.map((tileRow) =>
            tileRow.map(tile => mapLoader(tile))
        )
        for (let i = 0; i < ROWS; i++)
            for (let j = 0; j < COLUMNS; j++)
                if (this.gameComponents.map[i][j].texture.key !== this.gameComponents.tileData[i][j].texture)
                    this.gameComponents.map[i][j].setTexture(this.gameComponents.tileData[i][j].texture)
    }

    handleMovement(movement: vector): void {
        if (!this.gameComponents.created)
            return;
        if (!this.mapData)
            return;

        const newVector: vector = {
            mapX: this.gameComponents.player.mapX + movement.mapX,
            mapY: this.gameComponents.player.mapY + movement.mapY
        }
        if (newVector.mapX < 0) { // 왼쪽 맵으로 이동
            let mapId = this.mapData.distantMaps.w;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: COLUMNS - 1, mapY: this.gameComponents.player.mapY }
                });
        }
        else if (newVector.mapX >= COLUMNS) { // 오른쪽 맵으로 이동
            let mapId = this.mapData.distantMaps.e;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: 0, mapY: this.gameComponents.player.mapY }
                });
        }
        else if (newVector.mapY < 0) { // 위쪽 맵으로 이동
            let mapId = this.mapData.distantMaps.n;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: this.gameComponents.player.mapX, mapY: ROWS - 1 }
                });
        }
        else if (newVector.mapY >= ROWS) { // 아래쪽 맵으로 이동
            let mapId = this.mapData.distantMaps.s;
            if (mapId && mapMap.get(mapId))
                this.scene.start("game", {
                    mapId,
                    playerInitLoc: { mapX: this.gameComponents.player.mapX, mapY: 0 }
                });
        }
        else if (!this.gameComponents.tileData[newVector.mapY][newVector.mapX].passable) // 이동 불가능한 경우
            return;
        else { // 정상 이동 경우
            const newTile = this.gameComponents.tileData[newVector.mapY][newVector.mapX];
            const w = newTile.warp;

            if (w && mapMap.get(w.mapId)) {
                setTimeout(() => {
                    this.scene.start("game", {
                        mapId: w.mapId,
                        playerInitLoc: w.initialLoc
                    });
                }, GLOBALTIME);
            }

            for (const e of newTile.event)
                setTimeout(() =>
                    this.handleWorldEvent(e)
                    , GLOBALTIME);
            this.gameComponents.player.move(movement);
            this.playerMovementTimer = GLOBALTIME;
        }
    }

    handleWorldEvent(eventId: EventId) {
        if (!this.gameComponents.created)
            return;
        if (!this.mapData)
            return;
        if (globals.eventsTriggered.includes(eventId))
            return;

        globals.eventsTriggered.push(eventId);


        const regex = /^map[0-9]+story$/g;
        if (regex.test(eventId))
            this.gameComponents.textArea.appendTexts(this.mapData.textData);
        if (eventId === "towerOpenSesame") {
            towerOpenSesame(this.gameComponents.textArea);
            this.reloadMap();
        }
    };



    timeStopped(): "stop" | "cutscene" | "running" {

        if (this.gameComponents.created === false)
            return "stop";

        const textArea = this.gameComponents.textArea;

        if (this.cutsceneRunning)
            if (this._moveCounter >= textArea.lastLimits && textArea.lastStopTime)
                return "stop";
            else
                return "cutscene";
        else if (textArea.lastStopTime)
            return "stop";
        else
            return "running"
    }

    get moveCounter() {
        return this._moveCounter;
    }

    turnAction(timeStopped: "cutscene" | "running"): void {
        if (this.gameComponents.created === false)
            return;
        if (!this.mapData)
            return;

        if (timeStopped === "cutscene" && this.mapData.cutscene) {
            let filteredScenes = this.mapData.cutscene.textData.filter(textData =>
                textData.appearsAt === this._moveCounter);
            this.mapData.cutscene.textData = this.mapData.cutscene.textData.filter(textData =>
                textData.appearsAt !== this._moveCounter);
            let added = filteredScenes.length > 0
                
            for (let textData of filteredScenes)
                this.gameComponents.textArea.appendTexts(textData);

            if (added)
                return;

            this.gameComponents.player.turnAction();
        }

        if (this.cutsceneRunning && this._moveCounter >= (this.mapData.cutscene?.endsAt ?? 0)) {
            this.cutsceneRunning = false;
        }

        for (let mapObject of this.gameComponents.creatures) {
            if (mapObject !== this.gameComponents.player)
                mapObject.turnAction();
        }

        this._moveCounter += 1;
        this.creatureMovementTimer = GLOBALTIME;
    }
}
