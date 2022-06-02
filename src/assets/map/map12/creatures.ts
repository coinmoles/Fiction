import { CreatureData } from "../../../util/interface/CreatureData";

export default [
    {
        movements: [
            {
                type: "rot",
                initialDir: { mapX: 1, mapY: 0 },
                dur: { start: null, end: null },
                cycleType: "ccl",
                freq: 2
            }
        ], mapX: 5, mapY: 2, texture: 'light'
    },
    {
        movements: [
            {
                type: "rot",
                initialDir: { mapX: -1, mapY: 0 },
                dur: { start: null, end: null },
                cycleType: "cl",
                freq: 1
            }
        ], mapX: 2, mapY: 2, texture: 'light'
    },
    {
        movements: [
            {
                type: "rot",
                initialDir: { mapX: 0, mapY: -1 },
                dur: { start: null, end: null },
                cycleType: "ccl",
                freq: 1
            }
        ], mapX: 2, mapY: 5, texture: 'light'
    },
    { movements: [], mapX: 5, mapY: 5, texture: 'light' },
] as CreatureData[];