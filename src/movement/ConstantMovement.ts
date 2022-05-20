import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { vector } from "~/util/interface/vector";
import { Duration, MovementType } from "./MovementType";

export class ConstantMovementType extends MovementType {
    private dir: vector;

    constructor(mapObject: Creature, scene: GameScene, dur: Duration | null,
        dir: vector) {
        super(mapObject, scene, dur)
        this.dir = dir;
    }

    moveObject(): void {
        this.mapObject.move(this.dir);
    }
}