import { CreatureData } from "~/util/interface/CreatureData";

export const creatures: CreatureData[] = [
    {
        movements: [
            {
                type: "rot",
                dur: { start: null, end: null },
                initialDir: { mapX: -1, mapY: 0 },
                cycleType: "cl",
                freq: 3
            }
        ], mapX: 3, mapY: 6, texture: 'towerGuardian'
    },
    {
        movements: [
            {
                type: "rot",
                dur: { start: null, end: null },
                initialDir: { mapX: -1, mapY: 0 },
                cycleType: "cl",
                freq: 3
            }
        ], mapX: 7, mapY: 6, texture: 'towerGuardian'
    },
    {
        movements: [
            {
                type: "rot",
                dur: { start: null, end: null },
                initialDir: { mapX: -1, mapY: 0 },
                cycleType: "cl",
                freq: 3
            }
        ], mapX: 3, mapY: 3, texture: 'towerGuardian'
    },
]