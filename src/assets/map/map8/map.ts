import { MapData } from "../../../util/interface/MapData";
import { textureMapLoader } from "../mapHelper";
import story from "./story";
import tiles from "./tiles";

export const map8: MapData = {
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
        w: "map7",
        e: "map9"
    }
};