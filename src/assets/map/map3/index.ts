import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import tiles from "./tiles";

export const map3: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: [],
    distantMaps: {
        e: "map2",
        s: "map5"
    }
};