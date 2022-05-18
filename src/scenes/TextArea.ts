import { GAMEHEIGHT, GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";

export class TextArea extends Phaser.GameObjects.Group {
    private texts: string[] = []
    private currentText: string = "...";
    private textArea: Phaser.GameObjects.Image | null = null;
    private textObject: Phaser.GameObjects.Text | null = null;
    private timer: number = 0;

    constructor(scene: Phaser.Scene) {
        super(scene);
        this.texts = ["Long ago,\nThere was a country with the name "]
    }

    preload() {
        this.scene.load.image("textArea", "ui/text.png")
    }

    create() {
        this.textArea = new Phaser.GameObjects.Image(this.scene, ORIGINX, TILESIZE * ROWS + ORIGINY, "textArea").setOrigin(0, 0);
        this.textArea.setScale(GAMEWIDTH / this.textArea.width);
        this.add(this.textArea, true)
        
        this.textObject = new Phaser.GameObjects.Text(
            this.scene, 
            ORIGINX + TILESIZE / 2, 
            TILESIZE * ROWS + ORIGINY + TILESIZE / 3, 
            "...", 
            { 
                color: "000000",
                fontSize: `${TILESIZE * 1 / 4}pt`,
                wordWrap: { width: 400 }
            }
        ).setDepth(5);
        this.textObject.setLineSpacing(TILESIZE / 6)
        this.add(this.textObject, true);
        this.nextTexts();

        this.scene.input.keyboard.on("keydown-ENTER", (event) => {
            console.log("to next text!")
            this.nextTexts();
        });
    }

    update(time: number, delta: number) {
        
    }

    appendTexts (text: string)
    appendTexts (text: string) 
    appendTexts (text: string | string[]) {
        if (typeof text === "string")
            this.texts.push(text)
        else 
            this.texts.push(...text);
    }

    nextTexts () {
        this.textObject?.setText("");
        const text = this.texts.pop();
        if (text === undefined) {
            this.textObject?.setText("...");
            return;
        }
        
        let length = text.length;
        let i = 0;
        this.scene.time.addEvent({
            callback: () => {
                this.textObject?.setText(this.textObject.text + text[i]);
                ++i
            },
            repeat: length - 1,
            delay: 100
        });
    }

    
}