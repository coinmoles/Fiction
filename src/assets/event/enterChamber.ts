import { EventData } from "~/util/interface/EventData"

export const enterChamber: EventData = {
    mapId: "map2",
    endsAt: 3,
    playerMovement: [
        { type: "cnst", dur: { start: 1, end: 2 }, dir: { mapX: 0, mapY: -1 } }
    ],
    textData: [
        {
            text: "하지만 아이가 몇 번이고 내렸던 결심은, 이번에도 흔들리지 않았어요.",
            limits: 0
        },
        {
            text: "아이는 닫힌 문을 열었습니다.",
            limits: 1
        }
    ],
    mapChange: [{ appearsAt: 1 }],
    creatures: [],
    warps: {
        mapId: "map23",
        playerInitLoc: { mapX: 3, mapY: 6 },
        playerInitAnim: "backIdle"
    }
}