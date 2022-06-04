import { Queue } from "queue-typescript";
import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../../textureMap";
import tiles, { map22NewerTiles, map22NewestTiles, map22NewTiles } from "./tiles";

export const map22: MapData =  {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles),
        ...mapTextureLoader(map22NewTiles),
        ...mapTextureLoader(map22NewerTiles),
        ...mapTextureLoader(map22NewestTiles)
    ]),
    tiles,
    newTiles: new Queue(map22NewTiles, map22NewerTiles, map22NewestTiles),
    creatureData: [],
    distantMaps: {
    }
}