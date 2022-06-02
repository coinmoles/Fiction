import { AnimData } from "~/util/interface/AnimData";

export const playerAnimData: AnimData[] = [
    {
        name: "frontWalk",
        frame: 4,
        fps: 8,
        repeat: 1
    },
    {
        name: "backWalk",
        frame: 4,
        fps: 8,
        repeat: 1
    },
    {
        name: "leftWalk",
        frame: 4,
        fps: 8,
        repeat: 1
    },
    {
        name: "rightWalk",
        frame: 4,
        fps: 8,
        repeat: 1
    },
    {
        name: "frontIdle",
        frame: 2,
        fps: 3,
        repeat: -1,
    },
    {
        name: "backIdle",
        frame: 2,
        fps: 3,
        repeat: -1
    },
    {
        name: "leftIdle",
        frame: 2,
        fps: 3,
        repeat: -1
    },
    {
        name: "rightIdle",
        frame: 2,
        fps: 3,
        repeat: -1
    },
    {
        name: "sword",
        frame: 2,
        fps: 3,
        repeat: 1
    }
];