import { GAMEHEIGHT, GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";
import { Queue } from "queue-typescript";
import { TextData } from "~/util/interface/TextData";

export class TextArea extends Phaser.GameObjects.Group {
    protected textDataQueue: Queue<TextData>;
    public currentText: TextData | null = null;
    protected textArea: Phaser.GameObjects.Image | null = null;
    protected textObject: Phaser.GameObjects.Text | null = null;

    public lastStopTime: boolean = true;
    public lastLimits: number = 0;

    private logArea: Phaser.GameObjects.Rectangle | null = null;
    private logObjects: Phaser.GameObjects.Text[] | null = null;
    private oldText: string[];
    private _logOn: boolean = false;
    private logLoc: number = 0;

    constructor(scene: Phaser.Scene, textDataList: TextData[]) {
        super(scene);

        this.textDataQueue = new Queue(...textDataList);
        this.oldText = [];

        this.textArea = new Phaser.GameObjects.Image(this.scene, ORIGINX, TILESIZE * ROWS + ORIGINY, "textArea").setOrigin(0, 0);
        this.textArea.setScale(GAMEWIDTH / this.textArea.width);
        this.add(this.textArea, true);

        this.textObject = new Phaser.GameObjects.Text(
            this.scene,
            ORIGINX + TILESIZE / 2,
            TILESIZE * ROWS + ORIGINY + TILESIZE / 3,
            "...",
            {
                color: "000000",
                fontSize: `${TILESIZE * 1 / 4 - 2}pt`,
                wordWrap: { width: GAMEWIDTH - TILESIZE * 2 / 3 - 10 }
            }
        ).setDepth(5).setPadding(3, 3, 3, 3);
        this.textObject.setLineSpacing(TILESIZE / 6);
        this.add(this.textObject, true);

        this.logArea = new Phaser.GameObjects.Rectangle(
            this.scene,
            ORIGINX, ORIGINY,
            GAMEWIDTH, GAMEHEIGHT - 2 * TILESIZE,
            0, 0.7)
            .setDepth(15).setOrigin(0, 0).setVisible(false);
        this.add(this.logArea, true);

        this.logObjects = []
        for (let i = 0; i < 3; i++) {
            this.logObjects.push(new Phaser.GameObjects.Text(
                this.scene,
                ORIGINX + TILESIZE / 2,
                ORIGINY + 2 * TILESIZE * i + TILESIZE,
                "...",
                {
                    fontSize: `${TILESIZE * 1 / 4 - 2}pt`,
                    wordWrap: { width: GAMEWIDTH - TILESIZE * 2 / 3 - 10 }
                }
            ).setPadding(3, 3, 3, 3).setVisible(false).setDepth(20));
            this.logObjects[i].setLineSpacing(TILESIZE / 6);
            this.add(this.logObjects[i], true);
        }

        this.nextTexts();


    }

    clearTexts() {
        while (this.textDataQueue.length > 0)
            this.textDataQueue.dequeue();
    }

    appendTexts(textData: TextData)
    appendTexts(textData: TextData[])
    appendTexts(textData: TextData | TextData[]) {
        if (!Array.isArray(textData))
            this.textDataQueue.enqueue(textData)
        else
            for (let td of textData)
                this.textDataQueue.enqueue(td);

        if (this.currentText === null && this.textDataQueue.length !== 0)
            this.nextTexts();
    }

    skipTexts() {
        if (this.currentText === null)
            return;
        this.textObject?.setText(this.currentText.text);
        this.currentText = null;
    }

    nextTexts() {
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
        this.lastLimits = textData.limits ? textData.limits : 0;
        this.lastStopTime = true;
        let length = textData.text.length;
        let i = 0;

        this.textObject.setText("");
        this.oldText.push(this.currentText.text);
        this.logLoc = this.oldText.length - 1;
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

    toggleLog(on: boolean) {
        if (!this.logArea || !this.logObjects)
            return;
        
        this._logOn = on;

        this.logArea.setVisible(on)
        for (let i = 0; i < 3; i++)
            this.logObjects[i].setVisible(on);

        this.setLogObjects();
    }

    changeLog(num: 1 | -1) {        
        if (num === 1) {
            if (this.logLoc < this.oldText.length - 1)
                this.logLoc += 1;
        }
        else
            if (this.logLoc > 1)
                this.logLoc -= 1;

        this.setLogObjects();
    }

    setLogObjects() {
        if (!this.logArea || !this.logObjects)
            return

        console.log(this.oldText);
        console.log(this.logLoc);

        for (let i = 0; i < 3; i++) {
            if (this.logLoc + i - 2 >= 0)
                this.logObjects[i].setText(this.oldText[this.logLoc + i - 2])
            else
                this.logObjects[i].setText("...")
        }
    }

    get logOn() {
        return this._logOn;
    }
}
