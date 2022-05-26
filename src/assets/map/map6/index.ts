import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles: tiles,
    textData: [
    ],
    creatureData: [
        
    ],
    distantMaps: {
        n: "map4",
        s: "map9"
    }
} as MapData;