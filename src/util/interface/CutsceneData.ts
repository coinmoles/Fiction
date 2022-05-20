import { Queue } from "queue-typescript"
import { TextData } from "./TextData"
import { CreatureData } from "./CreatureData"
import { TileData } from "./TileData"

export interface CutsceneData {
    textureMap: Map<string, string>
    mapData: TileData[][]
    creatureData: CreatureData[]
    textData: CutsceneTextData[]
}

export interface CutsceneTextData extends TextData {
    stopTime: true
    appearsAt: number
    limits: number
}