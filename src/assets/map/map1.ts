import { MapData } from "../../util/interface/MapData";

export const map1: MapData = {
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
        { text: "먼 옛날,\n아름드리라는 나라가 있었습니다", stopTime: true },
        { text: "그곳에는 왕이 있었죠", stopTime: true }
    ],
    creatureData: [
        {
            movements: [
                { type: "rot", dur: { start: 5, end: 10}, initialDir: { mapX: -1, mapY: 0 }, freq: 2, cycleType: "ccl" }
            ],
            mapX: 7, mapY: 0, texture: "fa",
        },
        {
            movements: [
                { type: "cnst", dur: { start: null, end: 3}, dir: { mapX: -1, mapY: 0 } }
            ],
            mapX: 7, mapY: 2, texture: "fa",
        },
        {
            movements: [
                { type: "cnst", dur: { start: 1, end: 3 }, dir: { mapX: -1, mapY: 0 } }
            ],
            mapX: 7, mapY: 4, texture: "fa",
        },
        {
            movements: [
                { type: "cnst", dur: { start: 2, end: 4 }, dir: { mapX: -1, mapY: 0 } }
            ],
            mapX: 7, mapY: 6, texture: "fa",
        }
    ]
};