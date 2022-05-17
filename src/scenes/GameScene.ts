import Phaser from 'phaser';
import { MapObject } from '~/character/Character';
import { vector } from '~/util/interface/vector';
import { map1 } from '~/util/maps/map1';
import { COLUMNS, ROWS } from '~/util/scaleConstants';

const canGo = (char: vector, movement: vector, mapnum: number): boolean => {
    const newVector: vector = {
        mapX: char.mapX + movement.mapX,
        mapY: char.mapY + movement.mapY
    }

    console.log(newVector);
    if (newVector.mapX < 0 || newVector.mapX >= COLUMNS)
        return false;
    else if (newVector.mapY < 0 || newVector.mapY >= ROWS)
        return false;
    else if (map1[newVector.mapY][newVector.mapX] === "#")
        return false;
    else
        return true;
}

export default class GameScene extends Phaser.Scene {
    private character: MapObject | null = null;
    private blocks: MapObject[][] = [];
   // 방향키를 감지할 키를 추가하기!
    private upKey: Phaser.Input.Keyboard.Key | null = null;
    private downKey: Phaser.Input.Keyboard.Key | null = null;
    private leftKey: Phaser.Input.Keyboard.Key | null = null;
    private rightKey: Phaser.Input.Keyboard.Key | null = null;
    
    private timer: number = 0;

    constructor() {
        super({ key: "game" })
    }

    init(data) {
    }

    preload() {
        this.load.image('mi', 'characters/crazy.png');
        this.load.image("fuck", 'objects/bloakcs.png');
        this.load.image("grass", 'objects/graas.png');
    }

    create() {
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        for (let i = 0; i < ROWS; i++) {
            let blockRow: MapObject[] = []
            for (let j = 0; j < COLUMNS; j++) {
                if (map1[i][j] === "#"){
                    blockRow.push(new MapObject(this, j, i, "fuck").setDepth(1));
                } else {
                    blockRow.push(new MapObject(this, j, i, "grass").setDepth(1));
                }
            }
        }
        this.character = (new MapObject(this, 0, 0, "mi")).setDepth(2);

    }

    update(time: number, delta: number): void {
        this.timer += delta;
        if (this.character) {
            if (this.timer > 300) {
                if (this.upKey?.isDown || this.downKey?.isDown || this.leftKey?.isDown || this.rightKey?.isDown) {
                    let movement: vector = { mapX: 0, mapY: 0 };

                    if (this.upKey?.isDown)
                        movement.mapY = -1;
                    else if (this.downKey?.isDown)
                        movement.mapY = 1;
                    else if (this.leftKey?.isDown)
                        movement.mapX = -1;
                    else if (this.rightKey?.isDown)
                        movement.mapX = 1;
                    
                    console.log(canGo(this.character, movement, 0))
                    if (canGo(this.character, movement, 0)) {
                        this.character.moveMapPosition(movement);
                    }
                }
                this.timer = 0;
            }
        }
    }
}
