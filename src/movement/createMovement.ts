import { Creature } from "~/objects/Creature"
import GameScene from "~/scenes/GameScene"
import { ConstantMovementType } from "./ConstantMovement"
import { CycleMovementType } from "./CycleMovementType"
import { MovementData } from "./MovementData"
import { Duration, MovementType } from "./MovementType"
import { RotateMoveMentType } from "./RotateMovementType"

export const createMovement = (mapObject: Creature, scene: GameScene, movementData: MovementData): MovementType | null => {
    if (movementData.type === "cnst")
        return new ConstantMovementType(mapObject, scene, movementData.dur,
            movementData.dir);
    else if (movementData.type === "cyc")
        return new CycleMovementType(mapObject, scene, movementData.dur, 
            movementData.dirs, movementData.freq)
    else if (movementData.type === "rot")
        return new RotateMoveMentType(mapObject, scene, movementData.dur,
            movementData.initialDir, movementData.freq, movementData.cycleType)
    else
        return null
}