import { Queue } from "queue-typescript";
import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../textureMap";
import cutscene from "./cutscene";
import story from "./story";
import tiles, { map17NewTiles } from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles),
        ...mapTextureLoader(map17NewTiles)
    ]),
    tiles,
    newTiles: new Queue(map17NewTiles),
    textData: story,
    creatureData: [],
    distantMaps: {
    },
    cutscene
} as MapData;