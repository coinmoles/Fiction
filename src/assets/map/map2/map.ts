import { MapData } from "../../../util/interface/MapData";
import tiles from "./tiles";
import story from "./story";
import { textureMapLoader } from "../mapHelper";

export const map2: MapData = {
    textureMap: new Map([
        ["mi", "characters/crazy.png"],
        ["fa", "creatures/par.png"],
        ["textArea", "ui/text.png"],
        ["bl", "objects/bloakcs.png"],
        ["gr", "objects/graas.png"],
        ...textureMapLoader(tiles)
    ]),
    mapData: tiles,
    textData: story,
    creatureData: [
    ],
    distantMaps: {
        w: "map3",
        e: "map4"
    }
};