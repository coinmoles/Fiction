import { ORIGINX, ORIGINY, TILESIZE } from "~/util/scaleConstants";
import { Button } from "./Button";

export class Controls {
    private upButton: Button;
    private leftButton: Button;
    private downButton: Button;
    private rightButton: Button;
    private enterButton: Button;
    private shiftButton: Button;
    private escButton: Button;

    private wKey: Phaser.Input.Keyboard.Key
    private sKey: Phaser.Input.Keyboard.Key
    private aKey: Phaser.Input.Keyboard.Key
    private dKey: Phaser.Input.Keyboard.Key
    private upKey: Phaser.Input.Keyboard.Key
    private downKey: Phaser.Input.Keyboard.Key
    private leftKey: Phaser.Input.Keyboard.Key
    private rightKey: Phaser.Input.Keyboard.Key
    private enterKey: Phaser.Input.Keyboard.Key
    private shiftKey: Phaser.Input.Keyboard.Key
    private escKey: Phaser.Input.Keyboard.Key

    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, ingame: boolean) {
        this.scene = scene;
        this.upButton = new Button(
            scene,
            "↑",
            ORIGINX + TILESIZE * 3 / 2, ORIGINY + TILESIZE * 11 / 2 + (ingame ? 0 : TILESIZE * 3 / 2),
            TILESIZE * 3 / 4, TILESIZE * 3 / 4
        );
        this.leftButton = new Button(
            scene,
            "←",
            ORIGINX + TILESIZE * 1 / 2, ORIGINY + TILESIZE * 13 / 2 + (ingame ? 0 : TILESIZE * 3 / 2),
            TILESIZE * 3 / 4, TILESIZE * 3 / 4
        );
        this.downButton = new Button(
            scene,
            "↓",
            ORIGINX + TILESIZE * 3 / 2, ORIGINY + TILESIZE * 13 / 2 + (ingame ? 0 : TILESIZE * 3 / 2),
            TILESIZE * 3 / 4, TILESIZE * 3 / 4
        );
        this.rightButton = new Button(
            scene,
            "→",
            ORIGINX + TILESIZE * 5 / 2, ORIGINY + TILESIZE * 13 / 2 + (ingame ? 0 : TILESIZE * 3 / 2),
            TILESIZE * 3 / 4, TILESIZE * 3 / 4
        );
        this.enterButton = new Button(
            scene,
            "Enter",
            ORIGINX + TILESIZE * 13 / 2, ORIGINY + TILESIZE * 13 / 2 + (ingame ? 0 : TILESIZE * 3 / 2),
            TILESIZE * 5 / 2, TILESIZE * 3 / 4
        );
        this.shiftButton = new Button(
            scene,
            "Shift",
            ORIGINX + TILESIZE * 6, ORIGINY + TILESIZE * 1 / 4,
            TILESIZE * 5 / 4, TILESIZE * 3 / 8
        )
        this.escButton = new Button(
            scene,
            "Esc",
            ORIGINX + TILESIZE * 59 / 8, ORIGINY + TILESIZE * 1 / 4,
            TILESIZE, TILESIZE * 3 / 8
        )

        this.scene.add.existing(this.upButton);
        this.scene.add.existing(this.leftButton);
        this.scene.add.existing(this.downButton);
        this.scene.add.existing(this.rightButton);
        this.scene.add.existing(this.enterButton);
        this.scene.add.existing(this.shiftButton);
        this.scene.add.existing(this.escButton);

        this.wKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.enterKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.shiftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        this.escKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    checkUp() {
        return this.wKey.isDown ||
            this.upKey.isDown ||
            this.upButton.isDown
    }

    checkDown() {
        return this.sKey.isDown ||
            this.downKey.isDown ||
            this.downButton.isDown
    }

    checkLeft() {
        return this.aKey.isDown ||
            this.leftKey.isDown ||
            this.leftButton.isDown
    }

    checkRight() {
        return this.dKey.isDown ||
            this.rightKey.isDown ||
            this.rightButton.isDown
    }

    checkEnter() {
        return this.enterKey.isDown ||
            this.enterButton.isDown
    }

    checkShift() {
        return this.shiftKey.isDown ||
            this.shiftButton.isDown
    }

    checkEsc() {
        return this.escKey.isDown ||
            this.escButton.isDown
    }
}