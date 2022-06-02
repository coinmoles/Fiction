import { CreatureData } from "../../../util/interface/CreatureData";

export default [
    {
        movements: [
            {
                type: "rot",
                dur: { start: null, end: null },
                initialDir: { mapX: 0, mapY: -1 },
                freq: [6, 7, 6, 7],
                cycleType: "ccl"
            }
        ], mapX: 7, mapY: 6, texture: 'light'
    },
    {
        movements: [
            {
                type: "rot",
                dur: { start: null, end: null },
                initialDir: { mapX: 0, mapY: 1 },
                freq: [4, 5, 4, 5],
                cycleType: "cl"
            }
        ], mapX: 6, mapY: 1, texture: 'light'
    },
    {
        movements: [
            {
                type: "rot",
                dur: { start: null, end: null },
                initialDir: { mapX: 0, mapY: -1 },
                freq: [2, 3, 2, 3],
                cycleType: "ccl"
            }
        ], mapX: 5, mapY: 4, texture: 'light'
    },
] as CreatureData[];