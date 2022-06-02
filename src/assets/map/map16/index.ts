import { Queue } from "queue-typescript";
import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../../textureMap";
import tiles, { map16NewTiles } from "./tiles";

export const map16: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles),
        ...mapTextureLoader(map16NewTiles),
    ]),
    tiles,
    newTiles: new Queue(map16NewTiles),
    creatureData: [],
    distantMaps: {
        s: "map15"
    }
}