import { Queue } from "queue-typescript"
import { CreatureData, TextData, TileData } from "./MapData"

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