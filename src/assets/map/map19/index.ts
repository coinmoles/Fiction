import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, normalTextures, textureLoader } from "../../textureMap";
import { creatures } from "./creatures";
import tiles from "./tiles";

export const map19: MapData =  {
    textureMap: new Map([
        ...normalTextures,
        ...textureLoader(creatures.map(creature => creature.texture)),
        ...mapTextureLoader(tiles),
    ]),
    tiles,
    creatureData: creatures,
    distantMaps: {
    }
}