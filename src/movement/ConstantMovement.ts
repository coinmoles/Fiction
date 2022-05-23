import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { vector } from "~/util/interface/vector";
import { MovementType } from "./MovementType";
import { Duration } from "../util/interface/Duration";
import CutScene from "~/scenes/CutScene";

export class ConstantMovementType extends MovementType {
    private dir: vector;

    constructor(mapObject: Creature, scene: GameScene | CutScene, dur: Duration,
        dir: vector) {
        super(mapObject, scene, dur)
        this.dir = dir;
    }

    moveObject(): void {
        console.log("hmm");
        this.mapObject.move(this.dir);
    }
}