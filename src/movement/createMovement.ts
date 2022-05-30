import { Creature } from "~/objects/Creature"
import GameScene from "~/scenes/GameScene"
import { MovementData } from "../util/interface/MovementData"
import { ConstantMovementType } from "./ConstantMovement"
import { CycleMovementType } from "./CycleMovementType"
import { DestroyMovementType } from "./DestroyMovementType"
import { MovementType } from "./MovementType"
import { RotateMoveMentType } from "./RotateMovementType"

export const createMovement = (mapObject: Creature, scene: GameScene, movementData: MovementData): MovementType | null => {
    if (movementData.type === "cnst")
        return new ConstantMovementType(mapObject, scene, movementData.dur,
            movementData.dir);
    else if (movementData.type === "cyc")
        return new CycleMovementType(mapObject, scene, movementData.dur, 
            movementData.dirs, movementData.freq);
    else if (movementData.type === "rot")
        return new RotateMoveMentType(mapObject, scene, movementData.dur,
            movementData.initialDir, movementData.freq, movementData.cycleType);
    else if(movementData.type === "dst")
        return new DestroyMovementType(mapObject, scene, movementData.dur);
    else
        return null;
}