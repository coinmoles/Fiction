import { TextArea } from "~/objects/TextArea";
import { TextData } from "~/util/interface/TextData";
import map16 from "../map/map16"
import { map16NewTiles } from "../map/map16/tiles";
import { mapTextureLoader, normalTextures } from "../map/textureMap";

export const towerOpenSesame = (textArea: TextArea) => {
    map16.tiles = map16NewTiles;
    map16.textureMap = new Map([
        ...normalTextures,
        ...mapTextureLoader(map16.tiles)
    ])

    textArea.appendTexts([
        { text: "아이가 탑에 다가가자, 탑은 기다렸다는 듯이 정문을 열어 보였어요." },
        { text: "문이라는 표현은 정확하지 않을지도 몰라요. 문이라기보다는 구멍에 가까웠으니까요." }
    ])
}
