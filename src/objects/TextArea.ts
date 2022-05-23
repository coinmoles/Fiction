import { GAMEHEIGHT, GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";
import { Queue } from "queue-typescript";
import { TextData } from "~/util/interface/TextData";
import { CutsceneTextData } from "~/util/interface/CutsceneData";

export class TextArea<T extends TextData> extends Phaser.GameObjects.Group {
    protected textDataQueue: Queue<T>;
    public currentText: T | null = null;
    protected textArea: Phaser.GameObjects.Image | null = null;
    protected textObject: Phaser.GameObjects.Text | null = null;

    public stopTime: boolean = false

    constructor(scene: Phaser.Scene, textDataList: T[]) {
        super(scene);

        this.textDataQueue = new Queue(...textDataList);

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

    clearTexts () {
        while (this.textDataQueue.length > 0)
            this.textDataQueue.dequeue();
    }

    appendTexts (textData: T)
    appendTexts (textData: T[]) 
    appendTexts (textData: T | T[]) {
        if (!Array.isArray(textData))
            this.textDataQueue.enqueue(textData)
        else 
            for (let td of textData)            
                this.textDataQueue.enqueue(td);
    }

    skipTexts () {
        if (this.currentText === null)
            return;
        this.textObject?.setText(this.currentText.text);
        this.currentText = null;
    }

    nextTexts () {
        const textData = this.textDataQueue.dequeue();
        if (textData === undefined) {
            this.currentText = null;
            this.textObject?.setText("...");
            this.stopTime = false;
            return;
        }
        
        this.currentText = textData;
        this.stopTime = textData.stopTime;
        let length = textData.text.length;
        let i = 0;

        this.textObject?.setText("");
        this.scene.time.addEvent({
            callback: () => {
                if (this.currentText !== textData)
                    return;
                if (i == 0)
                    this.textObject?.setText(this.textObject.text + textData.text[0])    
                else
                    this.textObject?.setText(this.textObject.text + textData.text[i]);
                ++i
            },
            repeat: length - 1,
            delay: 100
        });
    }
}
