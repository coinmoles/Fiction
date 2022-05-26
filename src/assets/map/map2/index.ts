import { MapData } from "../../../util/interface/MapData";
import tiles from "./tiles";
import story from "./story";
import { mapTextureLoader, normalTextures } from "../textureMap";

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
        w: "map3",
        e: "map4"
    }
} as MapData;