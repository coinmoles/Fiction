import { CreatureData } from "./CreatureData";
import { TextData } from "./TextData";

interface DistantMaps {
    n?: string
    s?: string
    w?: string
    e?: string
}

export interface MapData {
    textureMap: Map<string, string>
    mapData: string[][]
    creatureData: CreatureData[]
    textData: TextData[]
    distantMaps: DistantMaps
}