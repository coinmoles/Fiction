import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../textureMap";
import creatures from "./creatures";
import story from "./story";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...textureLoader(creatures.map(v => v.texture)),
        ...mapTextureLoader(tiles)
    ]),
    tiles: tiles,
    textData: story,
    creatureData: creatures,
    distantMaps: {
        n: "map10",
        s: "map12"
    }
} as MapData;