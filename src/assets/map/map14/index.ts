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
    mapData: tiles,
    textData: [],
    creatureData: creatures,
    distantMaps: {
        w: "map13",
        e: "map15aw"
    }
} as MapData;