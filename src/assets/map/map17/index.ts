import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import cutscene from "./cutscene";
import story from "./story";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    textData: story,
    creatureData: [],
    distantMaps: {
    },
    cutscene
} as MapData;