import { EventId } from "./EventId";
import { MapId } from "./MapId";
import { vector } from "./vector";

interface WarpData {
    mapId: MapId
    initialLoc: vector
}

export interface TileData {
    texture: string;
    passable: boolean;
    event: EventId[];
}
