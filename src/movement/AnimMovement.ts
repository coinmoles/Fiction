import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { Duration } from "../util/interface/Duration";
import { MovementType } from "./MovementType";

export class AnimMovementType extends MovementType {
    private animName: string;

    constructor(mapObject: Creature, scene: GameScene, dur: Duration,
        animName: string) {
        super(mapObject, scene, dur)
        this.animName = animName;
    }

    moveObject(): void {
        this.mapObject.setAnims(this.animName);
    }
}