import { Queue } from "queue-typescript";
import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import tiles, { map17NewTiles } from "./tiles";

export const map17: MapData =  {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles),
        ...mapTextureLoader(map17NewTiles)
    ]),
    tiles,
    newTiles: new Queue(map17NewTiles),
    creatureData: [],
    distantMaps: {
    }
}