import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../../textureMap";
import creatures from "./creatures";
import tiles from "./tiles";

export const map15: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...textureLoader(creatures.map(v => v.texture)),
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: creatures,
    distantMaps: {
        w: "map14",
        n: "map16"
    },
    darkness: true
} as MapData;