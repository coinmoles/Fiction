import tiles from "~/assets/map/map12/tiles";
import { globals } from "~/globals";
import { GAMEWIDTH, ORIGINX, ORIGINY, ROWS, TILESIZE } from "../util/scaleConstants";

export class WillPower extends Phaser.GameObjects.Group {
    protected wills: Phaser.GameObjects.Image[] = [];

    constructor(scene: Phaser.Scene) {
        super(scene);

        for (let i = 0; i < 10; i++) {
            const will = new Phaser.GameObjects.Image(this.scene, ORIGINX + (1/20 + 11/20 * i) * TILESIZE, ORIGINY + 1/4 * TILESIZE, "wpFull")
            .setOrigin(0, 0)
            .setDepth(30)
            will.setScale(TILESIZE / 2 / will.width);
            this.wills.push(will)
            this.add(will, true);
        }
        this.updateWillPower();
    }

    updateWillPower() {
        if (this.wills === null)
            return;
            
        for (let i = 0; i < 10; i++){
            if (i < globals.playerWill)
                this.wills[i].setTexture("wpFull")
            else
                this.wills[i].setTexture("wpEmpty");
        }
    }
}
