import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../../textureMap";
import creatures from "./creatures";
import tiles from "./tiles";

export const map13: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...textureLoader(creatures.map(v => v.texture)),
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: creatures,
    distantMaps: {
        w: "map12",
        e: "map14"
    },
    darkness: true
}