import { TextArea } from "~/objects/TextArea";
import map17 from "../map/map17";
import { map17NewTiles } from "../map/map17/tiles";
import { mapTextureLoader, normalTextures } from "../map/textureMap";

export const portal = (textArea: TextArea) => {
    map17.tiles = map17NewTiles;
}