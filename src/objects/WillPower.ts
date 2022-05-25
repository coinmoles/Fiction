import tiles from "~/assets/map/map12/tiles";
import { globals } from "~/globals";
import { GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";

export class WillPower extends Phaser.GameObjects.Group {
    protected wills: Phaser.GameObjects.Image[] | null = null;

    constructor(scene: Phaser.Scene) {
        super(scene);

        const will1 = new Phaser.GameObjects.Image(this.scene, ORIGINX + 1/20 * TILESIZE, ORIGINY + 1/4 * TILESIZE, "wpFull").setOrigin(0, 0).setDepth(5)
        will1.setScale(TILESIZE / 2 / will1.width)
        const will2 = new Phaser.GameObjects.Image(this.scene, ORIGINX + 3/5 * TILESIZE, ORIGINY + 1/4 * TILESIZE, "wpFull").setOrigin(0, 0).setDepth(5);
        will2.setScale(TILESIZE / 2 / will2.width)
        const will3 = new Phaser.GameObjects.Image(this.scene, ORIGINX + 23/20 * TILESIZE, ORIGINY + 1/4 * TILESIZE, "wpFull").setOrigin(0, 0).setDepth(5);
        will3.setScale(TILESIZE / 2 / will3.width)

        this.wills = [will1, will2, will3];
        this.add(will1, true);
        this.add(will2, true);
        this.add(will3, true);

        this.updateWillPower();
    }

    updateWillPower() {
        if (this.wills === null)
            return;

        console.log(this.wills);
        
        for (let i = 0; i < 3; i++){
            if (i < globals.playerWill)
                this.wills[i].setTexture("wpFull")
            else
                this.wills[i].setTexture("wpEmpty");
        }
    }
}
