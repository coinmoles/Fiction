import { Creature } from "~/objects/Creature";
import GameScene from "~/scenes/GameScene";
import { GLOBALTIME } from "~/util/constants";
import { vector } from "~/util/interface/vector";
import { Duration, MovementType } from "./MovementType";

export class CycleMovementType extends MovementType {
    protected dirs: vector[];
    protected freq: number;
    protected dirsLength: number;
    protected dirNum: number;

    constructor(mapObject: Creature, scene: GameScene, dur: Duration | null,
        dirs: vector[], freq: number) {
        super(mapObject, scene, dur);
        this.dirs = dirs;
        this.freq = freq;

        this.dirsLength = dirs.length;
        this.dirNum = 0;
    }

    moveObject(): void {
        this.dirNum %= this.dirsLength;

        console.log(this.dirs, this.dirNum);
        this.mapObject.move(this.dirs[this.dirNum]);
        
        this.dirNum += 1;
    }
}