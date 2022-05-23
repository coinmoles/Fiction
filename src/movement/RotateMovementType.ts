import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { vector } from "../util/interface/vector";
import { CycleMovementType } from "./CycleMovementType";
import { Duration } from "../util/interface/Duration";
import CutScene from "~/scenes/CutScene";

export class RotateMoveMentType extends CycleMovementType {
    constructor(mapObject: Creature, scene: GameScene | CutScene, dur: Duration,
        initialDir: vector, freq: number, cycleType: "cl" | "ccl"
    ) {
        let dir = initialDir;
        const dirs: vector[] = [];
        for (let i = 0; i < 4; i++) {
            dirs.push(dir);
            if (cycleType === "cl")
                dir = { mapX: -dir.mapY, mapY: dir.mapX };
            if (cycleType === "ccl")
                dir = { mapX: dir.mapY, mapY: -dir.mapX };
        }

        super(mapObject, scene, dur, dirs, freq);
    }
}