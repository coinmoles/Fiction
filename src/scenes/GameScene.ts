import Phaser from 'phaser';
import { mapMap } from '~/assets/map/mapMap';
import { mapLoader } from '~/assets/map/mapLoader';
import { Creature } from '~/objects/Creature';
import { MapObject } from '~/objects/MapObject';
import { Player } from '~/objects/Player';
import { TextArea } from '~/objects/TextArea';
import { GLOBALTIME } from '~/util/constants';
import { MapData } from '~/util/interface/MapData';
import { TextData } from "~/util/interface/TextData";
import { TileData } from '~/util/interface/TileData';
import { vector } from '~/util/interface/vector';
import { COLUMNS, ROWS } from '~/util/scaleConstants';

interface GameComponentsNull {
    created: false
    player: null
    mapObjects: null
    map: null
    textArea: null
    tileData: null
    keyW: null
    keyS: null
    keyA: null
    keyD: null
}

interface GameComponentsLoaded {
    created: true
    player: Player
    mapObjects: MapObject[]
    map: MapObject[][]
    textArea: TextArea<TextData>
    tileData: TileData[][]
    keyW: Phaser.Input.Keyboard.Key
    keyS: Phaser.Input.Keyboard.Key
    keyA: Phaser.Input.Keyboard.Key
    keyD: Phaser.Input.Keyboard.Key
}

export default class GameScene extends Phaser.Scene {
    private mapData: MapData | null = null;
    private gameComponents: GameComponentsLoaded | GameComponentsNull = {
        created: false,
        player: null,
        mapObjects: null,
        map: null,
        textArea: null,
        tileData: null,
        keyW: null,
        keyS: null,
        keyA: null,
        keyD: null
    }
    private isRunning = true;

    private playerInitLoc: vector | null = null;

    private playerMovementTimer = 0;
    private creatureMovementTimer = 0;
    private _moveCounter = 0;
    private emitter = new Phaser.Events.EventEmitter();

    constructor() {
        super({ key: "game" })
    }

    init(data: { mapData: MapData, playerInitLoc: vector }) {
        this.mapData = data.mapData;
        this.playerInitLoc = data.playerInitLoc;
    }

    preload() {
        if (!this.mapData)
            return;
        this.mapData.textureMap.forEach((value, key) => {
            this.load.image(key, value);
        });
    }

    create() {
        if (!this.mapData)
            return;
        if (!this.playerInitLoc)
            return;

        let tileData = this.mapData.mapData.map((tileRow) =>
            tileRow.map(tile => mapLoader(tile))
        )

        const player = new Player(this, this.playerInitLoc.mapX, this.playerInitLoc.mapY, "mi");
        const mapObjects: MapObject[] = []
        for (let creatureData of this.mapData.creatureData) {
            mapObjects.push(new Creature(this, creatureData.mapX, creatureData.mapY, creatureData.texture, creatureData.movements));
        }
        const map: MapObject[][] = []
        for (let i = 0; i < ROWS; i++) {
            let blockRow: MapObject[] = []
            for (let j = 0; j < COLUMNS; j++) {
                blockRow.push(new MapObject(this, j, i, tileData[i][j].texture).setDepth(1));
            }
            map.push(blockRow);
        }
        const textArea = new TextArea(this, this.mapData.textData);

        const keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        const keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        const keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        const keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.gameComponents = {
            created: true,
            player,
            mapObjects,
            map,
            textArea,
            tileData,
            keyW,
            keyS,
            keyA,
            keyD
        }
    }

    update(time: number, delta: number): void {
        if (!this.gameComponents.created)
            return;
        if (this.timeStopped())
            return;

        if (this.playerMovementTimer > 0)
            this.playerMovementTimer -= delta;
        if (this.creatureMovementTimer > 0)
            this.creatureMovementTimer -= delta;

        if (this.gameComponents.keyW.isDown && this.playerMovementTimer <= 0)
            this.handleMovement({ mapX: 0, mapY: -1 });
        else if (this.gameComponents.keyS.isDown && this.playerMovementTimer <= 0)
            this.handleMovement({ mapX: 0, mapY: 1 });
        else if (this.gameComponents.keyA.isDown && this.playerMovementTimer <= 0)
            this.handleMovement({ mapX: -1, mapY: 0 });
        else if (this.gameComponents.keyD.isDown && this.playerMovementTimer <= 0)
            this.handleMovement({ mapX: 1, mapY: 0 });

        if (this.isRunning) {
            for (let mapObject of this.gameComponents.mapObjects) {
                if (this.gameComponents.player.collide(mapObject)) {
                    this.gameComponents.textArea.clearTexts();
                    this.gameComponents.textArea.appendTexts({ text: "Game Over", stopTime: true });
                    this.gameComponents.textArea.nextTexts();
                    this.isRunning = false;
                }
            }
        }

        if (this.creatureMovementTimer <= 0)
            this.turnAction()


        this.gameComponents.player.update();
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
            let newMapData = this.mapData.distantMaps.w ? mapMap.get(this.mapData.distantMaps.w) : undefined
            if (newMapData)
                this.scene.start("game", {
                    mapData: newMapData,
                    playerInitLoc: { mapX: COLUMNS - 1, mapY: this.gameComponents.player.mapY }
                });
        }
        else if (newVector.mapX >= COLUMNS) { // 오른쪽 맵으로 이동
            let newMapData = this.mapData.distantMaps.e ? mapMap.get(this.mapData.distantMaps.e) : undefined;
            if (newMapData)
                this.scene.start("game", {
                    mapData: newMapData,
                    playerInitLoc: { mapX: 0, mapY: this.gameComponents.player.mapY }
                });
        }
        else if (newVector.mapY < 0) { // 위쪽 맵으로 이동
            let newMapData = this.mapData.distantMaps.n ? mapMap.get(this.mapData.distantMaps.n) : undefined
            if (newMapData)
                this.scene.start("game", {
                    mapData: newMapData,
                    playerInitLoc: { mapX: this.gameComponents.player.mapX, mapY: ROWS - 1 }
                });
        }
        else if (newVector.mapY >= ROWS) { // 아래쪽 맵으로 이동
            let newMapData = this.mapData.distantMaps.s ? mapMap.get(this.mapData.distantMaps.s) : undefined
            if (newMapData)
                this.scene.start("game", {
                    mapData: newMapData,
                    playerInitLoc: { mapX: this.gameComponents.player.mapX, mapY: 0 }
                });
        }
        else if (!this.gameComponents.tileData[newVector.mapY][newVector.mapX].passable) // 이동 불가능한 경우
            return;
        else { // 정상 이동 경우
            const w = this.gameComponents.tileData[newVector.mapY][newVector.mapX].warp;

            if (w !== null) {
                let newMapData = mapMap.get(w.mapId)
                if (newMapData)
                    setTimeout(() => {
                        this.scene.start("game", {
                            mapData: newMapData,
                            playerInitLoc: w.initialLoc
                        });
                    }, GLOBALTIME);
            }
            
            this.gameComponents.player.turnAction(movement);
            this.playerMovementTimer = GLOBALTIME;
        }
    }

    timeStopped(): boolean {
        if (this.gameComponents.created === false)
            return true;
        return this.gameComponents.textArea.stopTime;
    }

    get moveCounter() {
        return this._moveCounter;
    }

    turnAction(): void {
        if (this.gameComponents.created === false)
            return;

        for (let mapObject of this.gameComponents.mapObjects) {
            if (mapObject !== this.gameComponents.player)
                mapObject.turnAction({ mapX: 0, mapY: 0 });
        }

        this._moveCounter += 1;
        this.creatureMovementTimer = GLOBALTIME;
    }
}
