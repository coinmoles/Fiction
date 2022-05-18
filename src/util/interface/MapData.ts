import { MapObject } from "~/objects/MapObject";
import { vector } from "~/util/interface/vector";
import { COLUMNS, ROWS } from "~/util/scaleConstants";

export interface TileData {
    texture: string
    passable: boolean
    event: string[]
    warp: number | null;
}

export interface CreatureData {
    dir: vector
    onWall: "bounce" | "rotate"
}

export interface MapData {
    textureMap: Map<string, string>
    mapData: TileData[][]
    creatureData: CreatureData[]
    textData: string[]
}