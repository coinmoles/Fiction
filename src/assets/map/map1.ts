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
    textData: [],
    creatureData: [
        {
            movement: { mapX: -2, mapY: 0 },
            mapX: 7,
            mapY: 0,
            texture: "fa",
            onWall: "bounce"
        },
        {
            movement: { mapX: -2, mapY: 0 },
            mapX: 7,
            mapY: 2,
            texture: "fa",
            onWall: "bounce"
        },
        {
            movement: { mapX: -2, mapY: 0 },
            mapX: 7,
            mapY: 4,
            texture: "fa",
            onWall: "bounce"
        },
        {
            movement: { mapX: -2, mapY: 0 },
            mapX: 7,
            mapY: 6,
            texture: "fa",
            onWall: "bounce"
        },
        {
            movement: { mapX: -1, mapY: 0 },
            mapX: 7,
            mapY: 0,
            texture: "fa",
            onWall: "bounce"
        },
        {
            movement: { mapX: -1, mapY: 0 },
            mapX: 7,
            mapY: 2,
            texture: "fa",
            onWall: "bounce"
        },
        {
            movement: { mapX: -1, mapY: 0 },
            mapX: 7,
            mapY: 4,
            texture: "fa",
            onWall: "bounce"
        },
        {
            movement: { mapX: -1, mapY: 0 },
            mapX: 7,
            mapY: 6,
            texture: "fa",
            onWall: "bounce"
        }
    ]
};