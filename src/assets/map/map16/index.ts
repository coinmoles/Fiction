import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import story from "./story";
import tiles, { map16NewTiles } from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles),
        ...mapTextureLoader(map16NewTiles),
    ]),
    tiles: tiles,
    textData: story,
    creatureData: [],
    distantMaps: {
        s: "map15"
    }
} as MapData;