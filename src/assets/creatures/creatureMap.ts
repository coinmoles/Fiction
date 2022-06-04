import { AnimData } from "~/util/interface/AnimData";
import { alternaAnimData } from "./alterna";
import { fireballAnimData } from "./fireball";
import { lightAnimData } from "./light";
import { playerAnimData } from "./player";
import { towerGuardianAnimData } from "./towerGuardian";
import { wizardAnimData } from "./wizard";

export const creatureAnimMap = new Map<string, AnimData[]>([
    ["player", playerAnimData],
    ["towerGuardian", towerGuardianAnimData],
    ["light", lightAnimData],
    ["wizard", wizardAnimData],
    ["fireball", fireballAnimData],
    ["alterna", alternaAnimData]
])