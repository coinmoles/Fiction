import { Creature } from "~/objects/Creature"
import { CreatureData } from "./CreatureData"
import { EventId } from "./EventId"
import { MovementData } from "./MovementData"
import { CutsceneTextData } from "./TextData"

export interface CutsceneData {
    endsAt: number
    playerMovement: MovementData[]
    textData: CutsceneTextData[]
    mapChange: { appearsAt: number }[]
    creatures: { creatureData: CreatureData, appearsAt: number }[]
}