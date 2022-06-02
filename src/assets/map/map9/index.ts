import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../../textureMap";
import tiles from "./tiles";

export const map9: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: [],
    distantMaps: {
        n: "map6",
        w: "map8"
    }
}