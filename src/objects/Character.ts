import { vector } from "~/util/interface/vector";
import { ORIGINX, ORIGINY, TILESIZE } from "~/util/scaleConstants";

export class MapObject extends Phaser.GameObjects.Sprite {
    private _mapX: number = 0
    private _mapY: number = 0

    constructor (scene: Phaser.Scene, mapX:number, mapY: number, texture: string | Phaser.Textures.Texture) {
        super(scene, 0, 0, texture);
        scene.add.existing(this);

        this._mapX = mapX;
        this._mapY = mapY;
        
        this.setOrigin(0, 0);
        this.setScale(TILESIZE / this.displayWidth, TILESIZE / this.displayHeight);
        this.setPosition(TILESIZE * mapX + ORIGINX, TILESIZE * mapY + ORIGINY);
    }

    get mapX () {
        return this._mapX;
    }
    set mapX (mapX: number) {
        this._mapX = mapX;
    }

    get mapY () {
        return this._mapY
    }
    set mapY (mapY: number) {
        this._mapY = mapY;
    }

    private adjustPosition() {
        this.setPosition(TILESIZE * this._mapX + ORIGINX, TILESIZE * this._mapY + ORIGINY)
    }

    setMapPosition (mapX: number, mapY: number)
    setMapPosition (movement: vector)
    setMapPosition (arg1: vector | number, arg2?: number) {
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            this._mapX = arg1;
            this._mapY = arg2;
            return;
        }
        else if (typeof arg1 !== "number") {
            this._mapX = arg1.mapX;
            this._mapY = arg1.mapY;
        }

        this.adjustPosition();
    }

    moveMapPosition (mapX: number, mapY: number)
    moveMapPosition (movement: vector)
    moveMapPosition (arg1: vector | number, arg2?: number) {
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            this._mapX += arg1;
            this._mapY += arg2;
            return;
        }
        else if (typeof arg1 !== "number") {
            this._mapX += arg1.mapX;
            this._mapY += arg1.mapY;
        }
         
        this.adjustPosition();
    }
    
}