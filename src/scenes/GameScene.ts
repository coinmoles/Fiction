import Phaser from 'phaser';
import { MapObject } from '~/objects/MapObject';
import { map1 } from '~/assets/map/map1';
import { vector } from '~/util/interface/vector';
import { COLUMNS, ROWS } from '~/util/scaleConstants';
import { TextArea } from '~/objects/TextArea';
import { GLOBALTIME } from '~/util/constants';
import { Player } from '~/objects/Player';
import { Creature } from '~/objects/Creature';
import { TextData } from "~/util/interface/TextData";

interface GameComponentsNull {
    created: false
    player: null
    mapObjects: null
    map: null
    textArea: null
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
    keyW: Phaser.Input.Keyboard.Key
    keyS: Phaser.Input.Keyboard.Key
    keyA: Phaser.Input.Keyboard.Key
    keyD: Phaser.Input.Keyboard.Key
}

export default class GameScene extends Phaser.Scene {
    private mapData = map1;
    private gameComponents: GameComponentsLoaded | GameComponentsNull = {
        created: false,
        player: null,
        mapObjects: null,
        map: null,
        textArea: null,
        keyW: null,
        keyS: null,
        keyA: null,
        keyD: null
    }
    private isRunning = true;

    private playerMovementTimer = 0;
    private creatureMovementTimer = 0;
    private _moveCounter = 0;
    private emitter = new Phaser.Events.EventEmitter();

    constructor() {
        super({ key: "game" })
    }

    init(data) {
    }

    preload() {
        this.mapData.textureMap.forEach((value, key) => {
            this.load.image(key, value);
        })
    }

    create() {
        const player = new Player(this, 4, 4, "mi");
        const mapObjects: MapObject[] = []
        for (let creatureData of this.mapData.creatureData) {
            mapObjects.push(new Creature(this, creatureData.mapX, creatureData.mapY, creatureData.texture, creatureData.movements));
        }
        const map: MapObject[][] = []
        for (let i = 0; i < ROWS; i++) {
            let blockRow: MapObject[] = []
            for (let j = 0; j < COLUMNS; j++) {
                blockRow.push(new MapObject(this, j, i, this.mapData.mapData[i][j].texture).setDepth(1));
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
            keyW,
            keyS,
            keyA,
            keyD
        }

        this.setUpEmitter();
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
            this.emitter.emit("movement", { mapX: 0, mapY: -1 });
        else if (this.gameComponents.keyS.isDown && this.playerMovementTimer <= 0)
            this.emitter.emit("movement", { mapX: 0, mapY: 1 });
        else if (this.gameComponents.keyA.isDown && this.playerMovementTimer <= 0)
            this.emitter.emit("movement", { mapX: -1, mapY: 0 });
        else if (this.gameComponents.keyD.isDown && this.playerMovementTimer <= 0)
            this.emitter.emit("movement", { mapX: 1, mapY: 0 });

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

    canGo(char: vector, movement: vector): boolean {
        const newVector: vector = {
            mapX: char.mapX + movement.mapX,
            mapY: char.mapY + movement.mapY
        }

        if (newVector.mapX < 0 || newVector.mapX >= COLUMNS)
            return false;
        else if (newVector.mapY < 0 || newVector.mapY >= ROWS)
            return false;
        else if (!this.mapData.mapData[newVector.mapY][newVector.mapX].passable)
            return false;
        else
            return true;
    }

    setUpEmitter() {
        this.emitter.on("movement", (movement: vector) => {
            if (this.gameComponents.created)
                if (this.canGo(this.gameComponents.player, movement))
                    this.gameComponents.player.turnAction(movement);

            this.playerMovementTimer = GLOBALTIME;
        })
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
        
        for (let mapObject of this.gameComponents.mapObjects){
            if (mapObject !== this.gameComponents.player)
                mapObject.turnAction({ mapX: 0, mapY: 0 });
        }

        this._moveCounter += 1;
        this.creatureMovementTimer = GLOBALTIME;
    }
}
