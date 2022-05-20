import { GLOBALTIME } from "~/util/constants";
import { vector } from "~/util/interface/vector";
import { MapObject } from "./MapObject";

export class Player extends MapObject {
    turnAction(movement: vector): void {
        const mapX = this._mapX;
        const mapY = this._mapY;
        let i = 0;
        this.scene.time.addEvent({
            callback: () => {
                this.setMapPosition(mapX + movement.mapX * i / 10, mapY + movement.mapY * i / 10);
                ++i
            },
            repeat: 10,
            delay: GLOBALTIME / 15
        })
    }
}