import { CutsceneData } from "~/util/interface/CutsceneData";

export const cutscene1: CutsceneData = {
    textureMap: new Map([
        ["mi", "characters/crazy.png"],
        ["fa", "creatures/par.png"],
        ["textArea", "ui/text.png"],
        ["bl", "objects/bloakcs.png"],
        ["gr", "objects/graas.png"]
    ]),
    mapData: [
        [
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
        ],
        [
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
        ],
        [
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
        ],
        [
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "bl", passable: false, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "bl", passable: false, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
        ],
        [
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "bl", passable: false, event: [], warp: null },
            { texture: "bl", passable: false, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
        ],
        [
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
        ],
        [
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
            { texture: "gr", passable: true, event: [], warp: null },
        ],
    ],
    textData: [
        { text: "먼 옛날,", appearsAt: 0, limits: 2, stopTime: true }
    ],
    creatureData: [
        {
            movements: [
                { type: "cnst", dur: null, dir: { mapX: -1, mapY: 0 } }
            ],
            mapX: 7, mapY: 0, texture: "fa",
        },
        {
            movements: [
                { type: "cnst", dur: null, dir: { mapX: -1, mapY: 0 } }
            ],
            mapX: 7, mapY: 2, texture: "fa",
        },
        {
            movements: [
                { type: "cnst", dur: null, dir: { mapX: -1, mapY: 0 } }
            ],
            mapX: 7, mapY: 4, texture: "fa",
        },
        {
            movements: [
                { type: "cnst", dur: null, dir: { mapX: -1, mapY: 0 } }
            ],
            mapX: 7, mapY: 6, texture: "fa",
        }
    ]
}