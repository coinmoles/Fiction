import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader } from "../textureMap";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ["mi", "characters/crazy.png"],
        ["textArea", "ui/text.png"],
        ...mapTextureLoader(tiles)
    ]),
    mapData: tiles,
    textData: [
    ],
    creatureData: [
        
    ],
    distantMaps: {
        n: "map3",
        s: "map7"
    }
} as MapData;