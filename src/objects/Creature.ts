import { Queue } from "queue-typescript";
import { createMovement } from "~/movement/createMovement";
import { MovementData } from "~/movement/MovementData";
import { MovementType } from "~/movement/MovementType";
import GameScene from "~/scenes/GameScene";
import { vector } from "~/util/interface/vector";
import { MapObject } from "./MapObject";

export class Creature extends MapObject {
    public movements: Queue<MovementType>

    constructor(scene: GameScene, mapX: number, mapY: number, texture: string | Phaser.Textures.Texture, movementDatas: MovementData[]) {
        super(scene, mapX, mapY, texture)
        this.setDepth(10);
        
        this.movements = new Queue();
        for (let movementData of movementDatas) {
            const movement = createMovement(this, scene, movementData)
            if (movement !== null)
                this.movements.enqueue(movement);
        }
    }

    turnAction(movement: vector): void {
        const currentMovement = this.movements.front;
        currentMovement.turnAction();
    }
}