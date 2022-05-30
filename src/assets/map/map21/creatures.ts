import { CreatureData } from "~/util/interface/CreatureData";

export const creatures: CreatureData[] = [
    {
        movements: [
            {
                type: "cyc",
                dur: { start: null, end: null },
                dirs: [{ mapX: -2, mapY: 0 }, { mapX: 2, mapY: 0 }],
                freq: 3
            }
        ], mapX: 7, mapY: 2, texture: 'fa'
    },
    {
        movements: [
            {
                type: "cyc",
                dur: { start: null, end: null },
                dirs: [{ mapX: 2, mapY: 0 }, { mapX: -2, mapY: 0 }],
                freq: 3
            }
        ], mapX: 0, mapY: 3, texture: 'fa'
    },
    {
        movements: [
            {
                type: "cyc",
                dur: { start: null, end: null },
                dirs: [{ mapX: -2, mapY: 0 }, { mapX: 2, mapY: 0 }],
                freq: 3
            }
        ], mapX: 7, mapY: 4, texture: 'fa'
    },
    {
        movements: [
            {
                type: "cyc",
                dur: { start: null, end: null },
                dirs: [{ mapX: 2, mapY: 0 }, { mapX: -2, mapY: 0 }],
                freq: 3
            }
        ], mapX: 0, mapY: 5, texture: 'fa'
    }
]