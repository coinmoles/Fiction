import { MapData } from "../../../util/interface/MapData";
import { textureMapLoader } from "../mapHelper";
import tiles from "./tiles";

export const map7: MapData = {
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
        n: "map5",
        e: "map8"
    }
};