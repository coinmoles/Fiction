import { MapData } from "../../../util/interface/MapData";
import tiles from "./tiles";
import story from "./story";
import { mapTextureLoader } from "../textureMap";

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
        w: "map3",
        e: "map4"
    }
} as MapData;