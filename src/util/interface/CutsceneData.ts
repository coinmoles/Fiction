import { MovementData } from "./MovementData"
import { CutsceneTextData } from "./TextData"

export interface CutsceneData {
    endsAt: number
    playerMovement: MovementData[]
    textData: CutsceneTextData[]
}