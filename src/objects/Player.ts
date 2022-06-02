import GameScene from "~/scenes/GameScene";
import { GLOBALTIME } from "~/util/constants";
import { MovementData } from "~/util/interface/MovementData";
import { vector } from "~/util/interface/vector";
import { Creature } from "./Creature";


export class Player extends Creature {

    constructor(scene: GameScene, vec: vector, movementDatas: MovementData[]) {
        super(scene, vec, "player", movementDatas);
    }

    move(movement: vector, realmove: boolean): void {
        const mapX = this._mapX;
        const mapY = this._mapY;
        let i = 0;

        if (movement.mapX === 0 && movement.mapY > 0)
            this.setAnims("frontWalk");
        if (movement.mapX === 0 && movement.mapY < 0)
            this.setAnims("backWalk");
        if (movement.mapX > 0 && movement.mapY === 0)
            this.setAnims("rightWalk");
        if (movement.mapX < 0 && movement.mapY === 0)
            this.setAnims("leftWalk");
        this.scene.time.addEvent({
            callback: () => {
                if (i <= 10 && realmove)
                    this.setMapPosition(mapX + movement.mapX * i / 10, mapY + movement.mapY * i / 10);
                ++i
                if (i === 15) {
                    if (movement.mapX === 0 && movement.mapY > 0)
                        this.setAnims("frontIdle");
                    if (movement.mapX === 0 && movement.mapY < 0)
                        this.setAnims("backIdle");
                    if (movement.mapX > 0 && movement.mapY === 0)
                        this.setAnims("rightIdle");
                    if (movement.mapX < 0 && movement.mapY === 0)
                        this.setAnims("leftIdle");
                }
            },
            repeat: 15,
            delay: GLOBALTIME / 15
        })
    }
}