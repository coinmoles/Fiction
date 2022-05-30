import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { Duration } from "../util/interface/Duration";

export class MovementType {
    protected mapObject: Creature
    protected scene: GameScene
    protected dur: Duration
    protected startTime: number

    constructor(mapObject: Creature, scene: GameScene, dur: Duration) {
        this.mapObject = mapObject
        this.scene = scene
        this.dur = dur
        this.startTime = scene.moveCounter;
    }

    checkExpired(): boolean {
        if (this.dur.end !== null && this.scene.moveCounter >= this.startTime + this.dur.end) {
            if (this.mapObject.movements.front === this)
                this.mapObject.movements.dequeue()
            return true;
        }
        return false;
    }

    turnAction(): void {
        if (this.dur.start !== null && this.scene.moveCounter < this.startTime +this.dur.start)
            return;
        if (this.checkExpired())
            return;
        
        this.moveObject();
    }

    moveObject(): void {
    }
}