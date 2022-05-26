import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../textureMap";
import creatures from "./creatures";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ...normalTextures,
        ...textureLoader(creatures.map(v => v.texture)),
        ...mapTextureLoader(tiles)
    ]),
    tiles: tiles,
    textData: [],
    creatureData: creatures,
    distantMaps: {
        n: "map11",
        e: "map13"
    }
} as MapData;