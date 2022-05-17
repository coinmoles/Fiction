import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
    private character: Phaser.GameObjects.Image | null = null;
    private x:number = 0;
    private y:number = 0;
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
        this.load.image('mi', 'characters/crazy.png')
    }

    create() {
        this.character = this.add.image(0, 0, 'mi').setScale(0.05).setOrigin(0, 0);
        console.log(this.character.displayWidth);

        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(time: number, delta: number): void {
        this.timer += delta;
        if (this.character) {
            if (this.timer > 300) {
                if (this.upKey?.isDown || this.downKey?.isDown || this.leftKey?.isDown || this.rightKey?.isDown) {
                    if (this.upKey?.isDown && this.y > 0)
                        this.y -= 1;
                    else if (this.downKey?.isDown)
                        this.y += 1
                    else if (this.leftKey?.isDown && this.x > 0)
                        this.x -= 1;
                    else if (this.rightKey?.isDown)
                        this.x += 1;
                    this.character.setPosition(this.x * this.character.displayWidth, this.y * this.character.displayHeight);
                }
                this.timer = 0;
            }
        }
    }
}
