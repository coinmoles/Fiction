import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import story from "./story";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles: tiles,
    textData: story,
    creatureData: [
        
    ],
    distantMaps: {
        w: "map7",
        e: "map9"
    }
} as MapData;