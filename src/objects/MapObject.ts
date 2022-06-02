import GameScene from "~/scenes/GameScene";
import { GLOBALTIME } from "~/util/constants";
import { vector } from "~/util/interface/vector";
import { ORIGINX, ORIGINY, TILESIZE } from "~/util/scaleConstants";

export class MapObject extends Phaser.GameObjects.Sprite {
    protected _mapX: number = 0
    protected _mapY: number = 0

    constructor(scene: GameScene, mapX: number, mapY: number, 
        texture: string | Phaser.Textures.Texture) {
        super(scene, 0, 0, texture);
        scene.add.existing(this);
        this.setDepth(5);

        this._mapX = mapX;
        this._mapY = mapY;

        this.setOrigin(0, 0);
        this.setScale(TILESIZE / this.displayWidth, TILESIZE / this.displayHeight);
        this.setPosition(TILESIZE * mapX + ORIGINX, TILESIZE * mapY + ORIGINY);
    }

    get mapX() {
        return this._mapX;
    }
    set mapX(mapX: number) {
        this._mapX = mapX;
    }

    get mapY() {
        return this._mapY
    }
    set mapY(mapY: number) {
        this._mapY = mapY;
    }

    private adjustPosition() {
        this.setPosition(TILESIZE * this._mapX + ORIGINX, TILESIZE * this._mapY + ORIGINY)
    }

    turnAction() {
    }

    move(dir: vector, realmove: boolean) {
        const mapX = this.mapX;
        const mapY = this.mapY;
        let i = 0;
        
        this.scene.time.addEvent({
            callback: () => {
                this.setMapPosition(
                    mapX + dir.mapX * i / 10,
                    mapY + dir.mapY * i / 10
                );
                ++i
            },
            repeat: 10,
            delay: GLOBALTIME / 15
        })
    } 

    setMapPosition(mapX: number, mapY: number)
    setMapPosition(movement: vector)
    setMapPosition(arg1: vector | number, arg2?: number) {
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            this._mapX = arg1;
            this._mapY = arg2;
        }
        else if (typeof arg1 !== "number") {
            this._mapX = arg1.mapX;
            this._mapY = arg1.mapY;
        }

        this.adjustPosition();
    }

    moveMapPosition(mapX: number, mapY: number)
    moveMapPosition(movement: vector)
    moveMapPosition(arg1: vector | number, arg2?: number) {
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            this._mapX += arg1;
            this._mapY += arg2;
        }
        else if (typeof arg1 !== "number") {
            this._mapX += arg1.mapX;
            this._mapY += arg1.mapY;
        }

        this.adjustPosition();
    }

    collide(other: MapObject) {
        const { x: left1, y: bottom1 } = this.getTopLeft().add({ x: TILESIZE / 4, y: TILESIZE / 4 });
        const { x: right1, y: top1 } = this.getBottomRight().add({ x: -TILESIZE / 2, y: -TILESIZE / 4 });
        const { x: left2, y: bottom2 } = other.getTopLeft().add({ x: TILESIZE / 4, y: TILESIZE / 4 });
        const { x: right2, y: top2 } = other.getBottomRight().add({ x: -TILESIZE / 4, y: -TILESIZE / 4 });

        if (left1 > right2 || right1 < left2 || top1 < bottom2 || bottom1 > top2)
            return false;
        else
            return true;
    }
}