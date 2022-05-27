import { Queue } from "queue-typescript";
import { createMovement } from "~/movement/createMovement";
import { MovementType } from "~/movement/MovementType";
import GameScene from "~/scenes/GameScene";
import { MovementData } from "~/util/interface/MovementData";
import { vector } from "~/util/interface/vector";
import { MapObject } from "./MapObject";

export class Creature extends MapObject {
    public movements = new Queue<MovementType>();

    constructor(scene: GameScene, vec: vector, texture: string, movementDatas: MovementData[])
    constructor(scene: GameScene, mapX: number, mapY: number, texture: string, movementDatas: MovementData[]) 
    constructor(scene: GameScene, arg1: vector | number, arg2: string | number, arg3: MovementData[] | string, arg4?: MovementData[]){
        let mapX: number, mapY: number
        let texture: string
        let movementDatas: MovementData[];
        if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "string" && arg4) {
            mapX = arg1;
            mapY = arg2;
            texture = arg3;
            movementDatas = arg4;
        }
        else if (typeof arg1 !== "number" && typeof arg2 === "string" && Array.isArray(arg3) && !arg4) {
            mapX = arg1.mapX;
            mapY = arg1.mapY;
            texture = arg2;
            movementDatas = arg3;
        }
        else
            return;

        super(scene, mapX, mapY, texture)
        this.setDepth(10);

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