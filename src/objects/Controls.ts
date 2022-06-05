import { ORIGINX, ORIGINY, TILESIZE } from "~/util/scaleConstants";

export class Controls extends Phaser.GameObjects.Group {
    private keyW: Phaser.GameObjects.Group;

    constructor(scene: Phaser.Scene) {
        super(scene)
        
        this.keyW = new Phaser.GameObjects.Group(scene);
        this.keyW.add(new Phaser.GameObjects.Rectangle(
            scene,
            ORIGINX + TILESIZE / 2,
            ORIGINY + TILESIZE * 7,
            TILESIZE / 2,
            TILESIZE / 2,
            0xffffff,
            0.5
        ).setDepth(8).setOrigin(0.5, 0.5), true)
        this.keyW.add(new Phaser.GameObjects.Text(
            scene,
            ORIGINX + TILESIZE / 2,
            ORIGINY + TILESIZE * 7,
            "W",
            {}
        ).setDepth(8).setOrigin(0.5, 0.5), true)

        console.log("hmm")
    }
}