import { Queue } from "queue-typescript";
import { MovementData } from "~/movement/MovementData";
import { MovementType } from "~/movement/MovementType";
import { vector } from "~/util/interface/vector";

export interface TileData {
    texture: string
    passable: boolean
    event: string[]
    warp: number | null;
}

export interface CreatureData {
    movements: MovementData[]
    mapX: number
    mapY: number
    texture: string
}

export interface TextData {
    text: string
    stopTime: boolean
}

export interface MapData {
    textureMap: Map<string, string>
    mapData: TileData[][]
    creatureData: CreatureData[]
    textData: TextData[]
}