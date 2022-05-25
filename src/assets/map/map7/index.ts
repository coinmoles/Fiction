import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader } from "../textureMap";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ["mi", "characters/crazy.png"],
        ["textArea", "ui/text.png"],
        ["wpEmpty", "ui/wpEmpty.png"],
        ["wpFull", "ui/wpFull.png"],
        ...mapTextureLoader(tiles)
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
} as MapData;