import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    mapData: tiles,
    textData: [
    ],
    creatureData: [
        
    ],
    distantMaps: {
        w: "map2",
        s: "map6"
    }
} as MapData;