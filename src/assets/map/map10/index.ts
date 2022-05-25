import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader } from "../textureMap";
import story from "./story";
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
    textData: story,
    creatureData: [
        
    ],
    distantMaps: {
        s: "map11"
    }
} as MapData;