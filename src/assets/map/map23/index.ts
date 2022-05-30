import { Queue } from "queue-typescript";
import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../textureMap";
import tiles, { map23FinalTiles, map23FrameTiles, map23NewerTiles, map23NewestTiles, map23NewTiles, map23PortalTiles } from "./tiles";

export const map23: MapData =  {
    textureMap: new Map([
        ...normalTextures,
        ...textureLoader(["sol", "fa", "twflk", "twpt "]),
        ...mapTextureLoader(tiles),
        ...mapTextureLoader(map23NewTiles)
    ]),
    tiles,
    newTiles: new Queue(map23FrameTiles, map23NewTiles, map23NewerTiles, map23NewestTiles, map23FinalTiles, map23PortalTiles),
    creatureData: [
        {
            texture: "sol",
            movements: [],
            mapX: 3,
            mapY: 1
        }
    ],
    distantMaps: {
    }
}