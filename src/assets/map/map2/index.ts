import { MapData } from "../../../util/interface/MapData";
import tiles from "./tiles";
import { mapTextureLoader, normalTextures } from "../textureMap";

export const map2: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: [],
    distantMaps: {
        w: "map3",
        e: "map4"
    }
}