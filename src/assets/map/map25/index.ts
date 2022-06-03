import { Queue } from "queue-typescript";
import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures } from "../../textureMap";
import tiles from "./tiles";

export const map25: MapData = {
    textureMap: new Map([
        ...normalTextures,
        ...mapTextureLoader(tiles),
    ]),
    tiles,
    creatureData: [],
    distantMaps: {}
}