import { EventData } from "~/util/interface/EventData"

export const enterCastle: EventData = {
    mapId: "map10",
    endsAt: 0,
    playerMovement: [],
    textData: [],
    mapChange: [],
    creatures: [],
    warps: {
        mapId: "map8",
        playerInitLoc: { mapX: 3, mapY: 6 },
        playerInitAnim: "backIdle"
    }
}