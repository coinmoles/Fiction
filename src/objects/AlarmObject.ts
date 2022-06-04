import { GAMEHEIGHT, GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";
import { Queue } from "queue-typescript";
import { TextData } from "~/util/interface/TextData";
import { AlarmData } from "~/util/interface/AlarmData";

export class AlarmObject extends Phaser.GameObjects.Group {
    public title: string = "";
    public body: string = "";
    protected textArea: Phaser.GameObjects.Image | null = null;
    protected titleObject: Phaser.GameObjects.Text | null = null
    protected textObject: Phaser.GameObjects.Text | null = null;

    constructor(scene: Phaser.Scene, message: AlarmData)
    constructor(scene: Phaser.Scene, title: string, body: string)
    constructor(scene: Phaser.Scene, arg1: string | AlarmData, arg2?: string) {
        super(scene);

        if (typeof arg1 === "string" && typeof arg2 === "string") {
            this.title = arg1;
            this.body = arg2
        }
        else if (typeof arg1 !== "string" && "title" in arg1) {
            this.title = arg1.title;
            this.body = arg1.body;
        }
        else {
            return;
        }

        this.textArea = new Phaser.GameObjects.Image(this.scene, ORIGINX + GAMEWIDTH * 1 / 2, ORIGINY + GAMEHEIGHT * 1 / 2, "textwoArea");
        this.textArea.setScale(2 / 3 * GAMEWIDTH / this.textArea.width);
        this.add(this.textArea, true);

        this.titleObject = new Phaser.GameObjects.Text(
            this.scene,
            ORIGINX + GAMEWIDTH * 1 / 2,
            ORIGINY + GAMEHEIGHT * 1 / 2 + - TILESIZE,
            this.title,
            {
                color: "000000",
                fontSize: `${TILESIZE * 1 / 3 - 2}pt`,
                align: "center"
            }
        ).setDepth(5).setPadding(6, 6, 6, 6).setOrigin(0.5, 0);
        this.titleObject.setLineSpacing(TILESIZE / 6),
            this.add(this.titleObject, true);

        this.textObject = new Phaser.GameObjects.Text(
            this.scene,
            ORIGINX + GAMEWIDTH * 1 / 2,
            ORIGINY + GAMEHEIGHT * 1 / 2,
            this.body,
            {
                color: "000000",
                fontSize: `${TILESIZE * 1 / 6 - 2}pt`,
                align: "center"
            }
        ).setDepth(5).setPadding(3, 3, 3, 3).setOrigin(0.5, 0);
        this.textObject.setLineSpacing(TILESIZE / 6);
        this.add(this.textObject, true);
    }
}
