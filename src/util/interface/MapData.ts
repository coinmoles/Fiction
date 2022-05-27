import { Queue } from "queue-typescript";
import { CreatureData } from "./CreatureData";
import { EventData } from "./EventData";
import { MapId } from "./MapId";

interface DistantMaps {
    n?: MapId
    s?: MapId
    w?: MapId
    e?: MapId
}

export interface MapData {
    textureMap: Map<string, string>
    tiles: string[][]
    newTiles?: Queue<string[][]>
    creatureData: CreatureData[]
    distantMaps: DistantMaps
}

