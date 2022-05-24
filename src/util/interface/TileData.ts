import { vector } from "./vector";

interface WarpData {
    mapId: string
    initialLoc: vector
}

export interface TileData {
    texture: string;
    passable: boolean;
    event: string[];
    warp: WarpData | null;
}
