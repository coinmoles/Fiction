import Phaser from 'phaser';
import { MapObject } from '~/objects/Character';
import { map1 } from '~/assets/map/map1';
import { vector } from '~/util/interface/vector';
import { COLUMNS, ROWS } from '~/util/scaleConstants';
import { TextArea } from '~/scenes/TextArea';


export default class GameScene extends Phaser.Scene {
    private character: MapObject | null = null;
    private map = map1
    private textArea: TextArea | null = new TextArea(this);

   // 방향키를 감지할 키를 추가하기!
    private upKey: Phaser.Input.Keyboard.Key | null = null;
    private downKey: Phaser.Input.Keyboard.Key | null = null;
    private leftKey: Phaser.Input.Keyboard.Key | null = null;
    private rightKey: Phaser.Input.Keyboard.Key | null = null;
    
    private movementTimer: number = 0;

    constructor() {
        super({ key: "game" })
    }

    init(data) {
    }

    preload() {
        this.load.image('mi', 'characters/crazy.png');

        this.map.preload(this);
        this.textArea?.preload();
    }

    create() {
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.character = (new MapObject(this, 0, 0, "mi")).setDepth(2);
        this.textArea?.create();

        this.map.create(this);
    }

    update(time: number, delta: number): void {
        if (this.character) {
            if (this.movementTimer <= 0) {
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
                    
                    if (this.canGo(this.character, movement)) {
                        this.character.moveMapPosition(movement);
                    }
                }
                this.movementTimer = 300;
            }
        }

        this.textArea?.update(time, delta);
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
        else if (!this.map.map[newVector.mapY][newVector.mapX].passable)
            return false;
        else
            return true;
    }
    
}
