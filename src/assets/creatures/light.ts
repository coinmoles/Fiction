import { AnimData } from "~/util/interface/AnimData";

export const lightAnimData: AnimData[] = [
    {
        name: "frontWalk",
        frame: 2,
        fps: 3,
        repeat: 1
    },
    {
        name: "backWalk",
        frame: 2,
        fps: 3,
        repeat: 1
    },
    {
        name: "leftWalk",
        frame: 2,
        fps: 3,
        repeat: 1
    },
    {
        name: "rightWalk",
        frame: 2,
        fps: 3,
        repeat: 1
    },
    {
        name: "frontIdle",
        frame: 2,
        fps: 3,
        repeat: -1
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
    }
];