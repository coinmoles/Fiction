import { Queue } from "queue-typescript";
import { createMovement } from "~/movement/createMovement";
import { MovementType } from "~/movement/MovementType";
import GameScene from "~/scenes/GameScene";
import { MovementData } from "~/util/interface/MovementData";
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

    turnAction(): void {
        const currentMovement = this.movements.front;
        if (currentMovement !== null) {
            currentMovement.turnAction();
        }
    }

    addMovement(scene: GameScene, movementDatas: MovementData[]) {
        for (let movementData of movementDatas) {
            const movement = createMovement(this, scene, movementData)
            if (movement !== null)
                this.movements.enqueue(movement);
        }
    }
}