import Phaser from 'phaser';
import { FULLHEIGHT, FULLWIDTH, ORIGINX, TILESIZE } from '~/util/scaleConstants';

const MAXCHOICE = 3;

export default class EndScene extends Phaser.Scene {
    private enterKey: Phaser.Input.Keyboard.Key | null = null;
    private creditsObject: Phaser.GameObjects.Group | null = null;
    private endingType: "True" | "Bad" | null = null;
    private timer: number = 1000;

    constructor() {
        super({ key: "end" });
    }

    init(data: { type: "True" | "Bad"}) {
        this.endingType = data.type
        this.timer = 1000;
    }

    create() {
        if (this.endingType === null)
            return;
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.creditsObject = new Phaser.GameObjects.Group(this);
        if (this.endingType === "True") {
            this.creditsObject.add(new Phaser.GameObjects.Text(
                this, 
                FULLWIDTH / 2,
                3/2 * TILESIZE,
                "True End!",
                {
                    fontSize: `${TILESIZE}pt`
                }
            ).setDepth(5).setOrigin(0.5, 0), true);
            this.creditsObject.add(new Phaser.GameObjects.Text(
                this, 
                FULLWIDTH / 2,
                3 *TILESIZE,
                "Now you can see more trivias from title!",
                {
                    fontSize: `${TILESIZE/4}pt`
                }
            ).setDepth(5).setOrigin(0.5, 0), true);
        }
        else if (this.endingType === "Bad") {
            this.creditsObject.add(new Phaser.GameObjects.Text(
                this, 
                FULLWIDTH / 2,
                3/2 * TILESIZE,
                "Bad End!",
                {
                    fontSize: `${TILESIZE}pt`
                }
            ).setDepth(5).setOrigin(0.5, 0), true);
            this.creditsObject.add(new Phaser.GameObjects.Text(
                this, 
                FULLWIDTH / 2,
                3 *TILESIZE,
                "Although it is impossible to avoid everything\nTry not getting hit too many times",
                {
                    fontSize: `${TILESIZE/4}pt`,
                    align: "center"
                }
            ).setDepth(5).setOrigin(0.5, 0), true);
        }
        
        this.creditsObject.add(new Phaser.GameObjects.Text(
            this, 
            FULLWIDTH / 2,
            4 * TILESIZE,
            "Credits:",
            {
                fontSize: `${TILESIZE / 2}pt`
            }
        ).setDepth(5).setOrigin(0.5, 0), true);
        this.creditsObject.add(new Phaser.GameObjects.Text(
            this, 
            FULLWIDTH / 2,
            5 * TILESIZE,
            "Story by: coinmoles(aka Jiho)",
            {
                fontSize: `${TILESIZE / 4}pt`
            }
        ).setDepth(5).setOrigin(0.5, 0), true);
        this.creditsObject.add(new Phaser.GameObjects.Text(
            this, 
            FULLWIDTH / 2,
            11/2 * TILESIZE,
            "Development by: coinmoles(aka Jiho)",
            {
                fontSize: `${TILESIZE / 4}pt`
            }
        ).setDepth(5).setOrigin(0.5, 0), true);
        this.creditsObject.add(new Phaser.GameObjects.Text(
            this, 
            FULLWIDTH / 2,
            6 * TILESIZE,
            "Art by: https://opengameart.org/\nDunno educational purpose so it's fine\nRight?",
            {
                fontSize: `${TILESIZE / 4}pt`,
                align: "center"
            }
        ).setDepth(5).setOrigin(0.5, 0), true);
    }

    update(time: number, delta: number): void {
        this.timer -= delta;
        if (this.timer <= 0 && this.enterKey?.isDown) 
            this.scene.start("main");
    }
}
