import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { GLOBALTIME } from "~/util/constants";
import { vector } from "~/util/interface/vector";
import { MovementType } from "./MovementType";
import { Duration } from "../util/interface/Duration";
import CutScene from "~/scenes/CutScene";

export class CycleMovementType extends MovementType {
    protected dirs: vector[];
    protected freq: number[];
    protected dirsLength: number;
    protected dirNum: number;
    protected count: number;

    constructor(mapObject: Creature, scene: GameScene | CutScene, dur: Duration,
        dirs: vector[], freq: number | number[]) {
        super(mapObject, scene, dur);
        this.dirs = dirs;
        this.dirsLength = dirs.length;
        if (typeof freq === "number")
            this.freq = new Array<number>(this.dirsLength).fill(freq);
        else
            this.freq = freq
        
        this.dirNum = 0;
        this.count = 0;
    }

    moveObject(): void {
        this.mapObject.move(this.dirs[this.dirNum]);

        this.count++;
        if (this.count >= this.freq[this.dirNum]) {
            this.count = 0;
            this.dirNum += 1;
            this.dirNum %= this.dirsLength;
        }
    }
}