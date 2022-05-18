import { GAMEHEIGHT, GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";
import { Queue } from "queue-typescript";

export class TextArea extends Phaser.GameObjects.Group {
    private texts: Queue<string> = new Queue();
    private currentText: string | null = null;
    private textArea: Phaser.GameObjects.Image | null = null;
    private textObject: Phaser.GameObjects.Text | null = null;
    private timer: number = 0;

    constructor(scene: Phaser.Scene) {
        super(scene);
        this.texts.enqueue("먼 옛날에,\n아름드리라는 나라가 있었습니다. 다른 나라와 마찬가지로,");
        this.texts.enqueue("이 나라에도 왕이 있었어요");

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
                wordWrap: { width: GAMEWIDTH - TILESIZE * 2/3 }
            }
        ).setDepth(5);
        this.textObject.setLineSpacing(TILESIZE / 6)
        this.add(this.textObject, true);
        this.nextTexts();

        this.scene.input.keyboard.on("keydown-ENTER", (event) => {
            if (this.currentText === null)
                this.nextTexts();
            else
                this.skipTexts();
        });
    }

    update(time: number, delta: number) {
        
    }

    clearTexts () {
        while (this.texts.length > 0)
            this.texts.dequeue();
    }

    appendTexts (text: string)
    appendTexts (text: string) 
    appendTexts (text: string | string[]) {
        if (typeof text === "string")
            this.texts.enqueue(text)
        else 
            for (let te of text)            
                this.texts.enqueue(te);
    }

    skipTexts () {
        if (this.currentText === null)
            return;
        this.textObject?.setText(this.currentText);
        this.currentText = null;
    }

    nextTexts () {
        const text = this.texts.dequeue();
        if (text === undefined) {
            this.currentText = null;
            this.textObject?.setText("...");
            return;
        }
        
        this.currentText = text
        let length = text.length;
        let i = 0;

        this.textObject?.setText("");
        this.scene.time.addEvent({
            callback: () => {
                if (this.currentText !== text)
                    return;

                this.textObject?.setText(this.textObject.text + text[i]);
                ++i
            },
            repeat: length - 1,
            delay: 100
        });
    }


}