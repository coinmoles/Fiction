import { EventData } from "~/util/interface/EventData";

export const fireball: EventData = {
    mapId: "map23",
    endsAt: 0,
    playerMovement: [],
    textData: [],
    mapChange: [],
    creatures: [
        {
            appearsAt: 0,
            creatureData: {
                texture: "fireball",
                movements: [
                    { type: "cnst", dir: { mapX: -1, mapY: 2 }, dur: { start: 0, end: 2 } },
                    { type: "dst", dur: { start: 2, end: null } }
                ],
                mapX: 7, mapY: 0,

                initialAnim: "fireball"
            }
        },
        {
            appearsAt: 0,
            creatureData: {
                texture: "fireball",
                movements: [
                    { type: "cnst", dir: { mapX: -1, mapY: 2 }, dur: { start: 0, end: 2 } },
                    { type: "dst", dur: { start: 2, end: null } }
                ],
                mapX: 5, mapY: 0,
                initialAnim: "fireball"
            }
        },
        {
            appearsAt: 0,
            creatureData: {
                texture: "fireball",
                movements: [
                    { type: "cnst", dir: { mapX: -1, mapY: 2 }, dur: { start: 0, end: 2 } },
                    { type: "dst", dur: { start: 2, end: null } }
                ],
                mapX: 3, mapY: 0,
                initialAnim: "fireball"
            }
        },
    ],
};