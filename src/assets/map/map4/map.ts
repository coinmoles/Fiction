import { MapData } from "../../../util/interface/MapData";
import { textureMapLoader } from "../mapHelper";
import tiles from "./tiles";

export const map4: MapData = {
    textureMap: new Map([
        ["mi", "characters/crazy.png"],
        ["fa", "creatures/par.png"],
        ["textArea", "ui/text.png"],
        ["bl", "objects/bloakcs.png"],
        ["gr", "objects/graas.png"],
        ...textureMapLoader(tiles)
    ]),
    mapData: tiles,
    textData: [
    ],
    creatureData: [
        
    ],
    distantMaps: {
        w: "map2",
        s: "map6"
    }
};