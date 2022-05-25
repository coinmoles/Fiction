import { MapData } from "../../../util/interface/MapData";
import { mapTextureLoader, textureLoader } from "../textureMap";
import creatures from "./creatures";
import story from "./story";
import tiles from "./tiles";

export default {
    textureMap: new Map([
        ["mi", "characters/crazy.png"],
        ["textArea", "ui/text.png"],
        ["wpEmpty", "ui/wpEmpty.png"],
        ["wpFull", "ui/wpFull.png"],
        ...textureLoader(creatures.map(v => v.texture)),
        ...mapTextureLoader(tiles)
    ]),
    mapData: tiles,
    textData: story,
    creatureData: creatures,
    distantMaps: {
        n: "map10",
        s: "map12"
    }
} as MapData;