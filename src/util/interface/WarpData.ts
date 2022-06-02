import { MapId } from "./MapId";
import { vector } from "./vector";

export interface WarpData {
    mapId: MapId,
    playerInitLoc: vector
    playerInitAnim: string
}