import Phaser from 'phaser'
import { HEIGHT, WIDTH } from '~/util/constants';

const MAXCHOICE = 3;

export default class MainMenuScene extends Phaser.Scene {
    // 방향키를 감지할 키를 추가하기!
    private upKey: Phaser.Input.Keyboard.Key | null = null;
    private downKey: Phaser.Input.Keyboard.Key | null = null;
    private enterKey: Phaser.Input.Keyboard.Key | null = null;
    
    private title: Phaser.GameObjects.Text | null = null;
    private choices: (Phaser.GameObjects.Text | null)[] = [null, null, null];
    private choice: number = 0;
    private timer: number = 0;

    constructor() {
        super({ key: "main", active: true })
    }

    create() {
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.title = this.add.text(WIDTH / 2, HEIGHT * 1/3, "마법 나라의 왕 이야기").setOrigin(0.5)
        this.choices[0] = this.add.text(WIDTH * 4/5, HEIGHT * 4/6, "새 게임").setFill("#ffff00");
        this.choices[1] = this.add.text(WIDTH * 4/5, HEIGHT * 9/12, "이어하기");
        this.choices[2] = this.add.text(WIDTH * 4/5, HEIGHT * 5/6, "트리비아");
    }

    update(time: number, delta: number): void {
        this.timer += delta;
        if (this.timer > 300) {
            if (this.upKey?.isDown || this.downKey?.isDown) {
                if (this.upKey?.isDown)
                   this.choice += this.choices.length - 1;
                else if (this.downKey?.isDown)
                    this.choice += 1
                this.choice %= this.choices.length;
                this.timer = 0;
                for (let i = 0; i < this.choices.length; i++) {
                    console.log(i, this.choice);
                    if (i === this.choice)
                        this.choices[i]?.setFill("#ffff00");
                    else
                        this.choices[i]?.setFill("#ffffff");
                }
            }
        }

        if (this.enterKey?.isDown) {
            if (this.choice === 0) {
                this.scene.start("game");
            }
        }
    }
}
