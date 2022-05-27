import { CutsceneData } from "~/util/interface/CutsceneData"
import { cutsceneStory } from "./story"

const cutscene: CutsceneData = {
    endsAt: 3,
    playerMovement: [
        { type: "cnst", dir: { mapX: 0, mapY: -1 }, dur: { start: 0, end: 2 } }
    ],
    textData: cutsceneStory,
    mapChange: [{ appearsAt: 3 }],
    creatures: []
};

export default cutscene