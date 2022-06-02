import { AnimData } from "~/util/interface/AnimData";
import { lightAnimData } from "./light";
import { playerAnimData } from "./player";
import { towerGuardianAnimData } from "./towerGuardian";

export const creatureAnimMap = new Map<string, AnimData>([
    ["player", playerAnimData],
    ["towerGuardian", towerGuardianAnimData],
    ["light", lightAnimData]
])