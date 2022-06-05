export class Button extends Phaser.GameObjects.Container {
    private button: Phaser.GameObjects.Rectangle
    private text: Phaser.GameObjects.Text
    private _isDown: boolean = false;

    constructor(scene: Phaser.Scene, text: string, x: number, y: number, w: number, h: number) {
        super(scene)

        this.button = new Phaser.GameObjects.Rectangle(
            scene,
            x, y,
            w, h,
            0
        ).setOrigin(0.5, 0.5)
            .setInteractive()
            .on("pointerdown", () => {
                this.buttonClick(true);
            })
            .on("pointerout", () => {
                this.buttonClick(false);
            })
            .on("pointerup", () => {
                this.buttonClick(false);
            });

        console.log(this.button.fillColor);

        this.text = new Phaser.GameObjects.Text(
            scene,
            x, y,
            text,
            { fontSize: `${h * 2 / 3}pt` }
        ).setOrigin(0.5, 0.5);

        this.add([this.button, this.text]);
        this.setDepth(10);
        this.setAlpha(0.5)
    }

    private buttonClick(isDown: boolean) {
        if (isDown) {
            this._isDown = true;
            this.setAlpha(1);
        }
        else {
            this._isDown = false;
            this.setAlpha(0.5)
        }
    }
    
    get isDown() {
        return this._isDown
    }
}