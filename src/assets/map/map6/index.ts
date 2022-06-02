import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../../textureMap";
import tiles from "./tiles";

export const map6: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles)
    ]),
    tiles,
    creatureData: [],
    distantMaps: {
        n: "map4",
        s: "map9"
    }
}