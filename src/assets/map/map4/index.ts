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
        w: "map2",
        s: "map6"
    }
} as MapData;