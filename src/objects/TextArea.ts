import { GAMEHEIGHT, GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";
import { Queue } from "queue-typescript";
import { AnyTextData, TextData } from "~/util/interface/TextData";

export class TextArea extends Phaser.GameObjects.Group {
    protected textDataQueue: Queue<AnyTextData>;
    public currentText: AnyTextData | null = null;
    protected textArea: Phaser.GameObjects.Image | null = null;
    protected textObject: Phaser.GameObjects.Text | null = null;

    public lastStopTime: boolean = true;
    public lastLimits: number = 0;

    constructor(scene: Phaser.Scene, textDataList: AnyTextData[]) {
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
                fontSize: `${TILESIZE * 1 / 4 - 2}pt`,
                wordWrap: { width: GAMEWIDTH - TILESIZE * 2/3 - 10 }
            }
        ).setDepth(5).setPadding(3, 3, 3, 3);
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

    appendTexts (textData: AnyTextData)
    appendTexts (textData: AnyTextData[]) 
    appendTexts (textData: AnyTextData | AnyTextData[]) {
        if (!Array.isArray(textData))
            this.textDataQueue.enqueue(textData)
        else 
            for (let td of textData)            
                this.textDataQueue.enqueue(td);
        
        if (this.currentText === null && this.textDataQueue.length !== 0)
            this.nextTexts();
    }

    skipTexts () {
        if (this.currentText === null)
            return;
        this.textObject?.setText(this.currentText.text);
        this.currentText = null;
    }

    nextTexts () {
        const textData = this.textDataQueue.dequeue();
        if (this.textObject === null) {
            setInterval(() => this.nextTexts(), 1000);
            this.lastLimits = -1;
            this.lastStopTime = true;
            return
        }
        if (textData === undefined || textData === null) {
            this.currentText = null;
            this.textObject?.setText("...");
            this.lastLimits = 0;
            this.lastStopTime = false;
            return;
        }
        
        this.currentText = textData;
        this.lastLimits = "limits" in textData ? textData.limits : 0;
        this.lastStopTime = true;
        let length = textData.text.length;
        let i = 0;

        this.textObject.setText("");
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
