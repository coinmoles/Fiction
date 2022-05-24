import { Creature } from "~/objects/Creature";
import CutScene from "~/scenes/CutScene";
import GameScene from "~/scenes/GameScene";
import { Duration } from "../util/interface/Duration";

export class MovementType {
    protected mapObject: Creature
    protected scene: GameScene | CutScene
    protected dur: Duration

    constructor(mapObject: Creature, scene: GameScene | CutScene, dur: Duration) {
        this.mapObject = mapObject
        this.scene = scene
        this.dur = dur
    }

    turnAction(): void {
        if (this.dur.start !== null && this.scene.moveCounter < this.dur.start)
            return;
        if (this.dur.end !== null && this.scene.moveCounter >= this.dur.end) 
            if (this.mapObject.movements.front === this)
                this.mapObject.movements.dequeue()
        this.moveObject();
    }

    moveObject(): void {
    }
}