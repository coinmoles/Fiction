import { Queue } from "queue-typescript";
import { MapData } from "../../../util/interface/MapData";
import tiles, { map17NewestTiles } from "./tiles";
import { mapTextureLoader, normalTextures } from "../../textureMap";
import { map17NewerTiles, map17NewTiles } from "./tiles";

export const map17: MapData =  {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles),
        ...mapTextureLoader(map17NewTiles),
        ...mapTextureLoader(map17NewerTiles)
    ]),
    tiles,
    newTiles: new Queue(map17NewTiles, map17NewerTiles, map17NewestTiles),
    creatureData: [],
    distantMaps: {
    }
}