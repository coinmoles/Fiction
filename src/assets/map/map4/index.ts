import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../../textureMap";
import tiles from "./tiles";

export const map4: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: [],
    distantMaps: {
        w: "map2",
        s: "map6"
    }
}