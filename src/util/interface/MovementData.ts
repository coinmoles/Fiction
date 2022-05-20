import { vector } from "~/util/interface/vector";
import { Duration } from "./Duration";

interface BaseMovementData {
    type: string
    dur: Duration
}

interface ConstantMovementData extends BaseMovementData {
    type: "cnst"
    dir: vector
}

interface CycleMovementData extends BaseMovementData {
    type: "cyc"
    dirs: vector[]
    freq: number
}

interface RotateMoveMentData extends BaseMovementData {
    type: "rot"
    initialDir: vector
    freq: number
    cycleType: "cl" | "ccl"
}

export type MovementData = ConstantMovementData | CycleMovementData | RotateMoveMentData;