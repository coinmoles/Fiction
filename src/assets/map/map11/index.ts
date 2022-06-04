import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../../textureMap";
import creatures from "./creatures";
import tiles from "./tiles";

export const map11: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...textureLoader(creatures.map(v => v.texture)),
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: creatures,
    distantMaps: {
        n: "map10",
        s: "map12"
    },
    darkness: true
}