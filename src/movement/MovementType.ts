import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";

export interface Duration {
    start: number
    end: number
}

export class MovementType {
    protected mapObject: Creature
    protected scene: GameScene
    protected dur: Duration | null

    constructor(mapObject: Creature, scene: GameScene, dur: Duration | null) {
        this.mapObject = mapObject
        this.scene = scene
        this.dur = dur
    }

    turnAction(): void {
        if (this.dur !== null && this.scene.moveCounter >= this.dur.end)
            if (this.mapObject.movements.front === this)
                this.mapObject.movements.dequeue()

        this.moveObject();
    }

    moveObject(): void {

    }
}