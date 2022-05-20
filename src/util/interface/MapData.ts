import { CreatureData } from "./CreatureData";
import { TextData } from "./TextData";
import { TileData } from "./TileData";

export interface MapData {
    textureMap: Map<string, string>
    mapData: TileData[][]
    creatureData: CreatureData[]
    textData: TextData[]
}