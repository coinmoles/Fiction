import { GLOBALTIME } from "~/util/constants";
import { vector } from "~/util/interface/vector";
import { MapObject } from "./MapObject";

export class Creature extends MapObject {
    private movement: vector

    constructor(scene, mapX, mapY, texture, movement: vector) {
        super(scene, mapX, mapY, texture)
        this.movement = movement;
        this.setDepth(10);
    }

    addMovement(movement: vector): void {
        const mapX = this._mapX;
        const mapY = this._mapY;
        let i = 0;
        this.scene.time.addEvent({
            callback: () => {
                this.setMapPosition(mapX + this.movement.mapX * i / 10, mapY + this.movement.mapY * i / 10);
                ++i
            },
            repeat: 10,
            delay: GLOBALTIME / 15
        })
    }
}