import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { vector } from "~/util/interface/vector";
import { MovementType } from "./MovementType";
import { Duration } from "../util/interface/Duration";

export class ConstantMovementType extends MovementType {
    private dir: vector;

    constructor(mapObject: Creature, scene: GameScene, dur: Duration,
        dir: vector) {
        super(mapObject, scene, dur)
        this.dir = dir;
    }

    moveObject(): void {
        this.mapObject.move(this.dir);
    }
}