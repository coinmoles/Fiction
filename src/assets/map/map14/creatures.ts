import { CreatureData } from "../../../util/interface/CreatureData";

export default [
    {
        movements: [
            {
                type: "cyc",
                dur: { start: null, end: null },
                dirs: [{ mapX: 0, mapY: -1 }, { mapX: 0, mapY: 1 }],
                freq: 6
            }
        ], mapX: 1, mapY: 6, texture: 'light'
    },
    {
        movements: [
            {
                type: "cyc",
                dur: { start: 2, end: null },
                dirs: [{ mapX: 0, mapY: -1 }, { mapX: 0, mapY: 1 }],
                freq: 6
            }
        ], mapX: 3, mapY: 6, texture: 'light'
    },
    {
        movements: [
            {
                type: "cyc",
                dur: { start: 4, end: null },
                dirs: [{ mapX: 0, mapY: -1 }, { mapX: 0, mapY: 1 }],
                freq: 6
            }
        ], mapX: 5, mapY: 6, texture: 'light'
    },
    {
        movements: [
            {
                type: "cyc",
                dur: { start: 6, end: null },
                dirs: [{ mapX: 0, mapY: -1 }, { mapX: 0, mapY: 1 }],
                freq: 6
            }
        ], mapX: 7, mapY: 6, texture: 'light'
    },
] as CreatureData[];