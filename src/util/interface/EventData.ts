import { CreatureData } from "./CreatureData"
import { MovementData } from "./MovementData"
import { TextData } from "./TextData"
import { WarpData } from "./WarpData"

export interface EventData {
    mapId: string
    endsAt: number
    playerMovement: MovementData[]
    textData: TextData[]
    mapChange: { appearsAt: number }[]
    creatures: { creatureData: CreatureData, appearsAt: number }[]
    warps?: WarpData
    end?: "TrueEnd" | "BadEnd"
}