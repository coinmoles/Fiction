import { CreatureData } from "./CreatureData";
import { CutsceneData } from "./CutsceneData";
import { MapId } from "./MapId";
import { TextData } from "./TextData";

interface DistantMaps {
    n?: MapId
    s?: MapId
    w?: MapId
    e?: MapId
}

export interface MapData {
    textureMap: Map<string, string>
    tiles: string[][]
    creatureData: CreatureData[]
    textData: TextData[]
    distantMaps: DistantMaps
    cutscene?: CutsceneData
}

