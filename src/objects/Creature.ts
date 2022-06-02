import { Queue } from "queue-typescript";
import { creatureAnimMap } from "~/assets/creatures/creatureMap";
import { createMovement } from "~/movement/createMovement";
import { MovementType } from "~/movement/MovementType";
import GameScene from "~/scenes/GameScene";
import { GLOBALTIME } from "~/util/constants";
import { AnimData } from "~/util/interface/AnimData";
import { CreatureData } from "~/util/interface/CreatureData";
import { MovementData } from "~/util/interface/MovementData";
import { vector } from "~/util/interface/vector";
import { MapObject } from "./MapObject";

export class Creature extends MapObject {
    public movements = new Queue<MovementType>();
    private playingAnimation: string = "frontIdle";
    private animNameList: string[] = [];

    constructor(scene: GameScene, data: CreatureData)
    constructor(scene: GameScene, vec: vector, texture: string, movementDatas: MovementData[], initialAnim?: string)
    constructor(scene: GameScene, mapX: number, mapY: number, texture: string, movementDatas: MovementData[], initialAnim?: string)
    constructor(scene: GameScene, arg1: vector | number | CreatureData, arg2?: string | number, arg3?: MovementData[] | string, arg4?: string | MovementData[], arg5?: string) {
        let mapX: number, mapY: number
        let texture: string
        let initialAnim: string | undefined
        let movementDatas: MovementData[];

        if (typeof arg1 !== "number" && ("texture" in arg1) && !arg2) {
            mapX = arg1.mapX;
            mapY = arg1.mapY;
            texture = arg1.texture
            movementDatas = arg1.movements;
            initialAnim = arg1.initialAnim
        }
        else if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "string" && Array.isArray(arg4)) {
            mapX = arg1;
            mapY = arg2;
            texture = arg3;
            movementDatas = arg4;
            initialAnim = arg5;
        }
        else if (typeof arg1 !== "number" && typeof arg2 === "string" && Array.isArray(arg3) && !Array.isArray(arg4)) {
            mapX = arg1.mapX;
            mapY = arg1.mapY;
            texture = arg2;
            movementDatas = arg3;
            initialAnim = arg4;
        }
        else
            return;

        const animData = creatureAnimMap.get(texture);
        if (!animData)
            return;

        super(scene, mapX, mapY, texture)
        this.setDepth(10);

        for (let movementData of movementDatas) {
            const movement = createMovement(this, scene, movementData)
            if (movement !== null)
                this.movements.enqueue(movement);
        }

        this.animNameList = animData.map(anim => anim.name)
        for (let anim of animData)
            this.anims.create({
                key: anim.name,
                frames: this.anims.generateFrameNames(texture, { prefix: anim.name, start: 0, end: anim.frame - 1 }),
                frameRate: anim.fps,
                repeat: anim.repeat
            });
        
        this.setAnims(initialAnim ? initialAnim : "frontIdle");
    }


    setAnims(anim: string) {
        if (!this.animNameList.includes(anim))
            return;

        if (this.playingAnimation !== anim)
            this.playingAnimation = anim;
        this.play(anim)
    }

    move(movement: vector, realmove: boolean) {
        const mapX = this._mapX;
        const mapY = this._mapY;
        let i = 0;

        if (movement.mapX === 0 && movement.mapY > 0)
            this.setAnims("frontWalk")
        if (movement.mapX === 0 && movement.mapY < 0)
            this.setAnims("backWalk")
        if (movement.mapX > 0 && movement.mapY === 0)
            this.setAnims("rightWalk")
        if (movement.mapX < 0 && movement.mapY === 0)
            this.setAnims("leftWalk")
        this.scene.time.addEvent({
            callback: () => {
                if (i <= 10 && realmove)
                    this.setMapPosition(mapX + movement.mapX * i / 10, mapY + movement.mapY * i / 10);
                ++i
                if (i === 15) {
                    if (movement.mapX === 0 && movement.mapY > 0)
                        this.setAnims("frontIdle")
                    if (movement.mapX === 0 && movement.mapY < 0)
                        this.setAnims("backIdle")
                    if (movement.mapX > 0 && movement.mapY === 0)
                        this.setAnims("rightIdle")
                    if (movement.mapX < 0 && movement.mapY === 0)
                        this.setAnims("leftIdle")
                }
            },
            repeat: 15,
            delay: GLOBALTIME / 15
        })
    }

    turnAction(): void {
        let currentMovement = this.movements.front;

        while (1) {
            if (currentMovement === null)
                return;
            if (!currentMovement.checkExpired())
                break;
            currentMovement = this.movements.front
        }

        if (currentMovement !== null) {
            currentMovement.turnAction();
        }
    }

    addMovement(scene: GameScene, movementDatas: MovementData[]) {
        for (let movementData of movementDatas) {
            const movement = createMovement(this, scene, movementData)
            if (movement !== null)
                this.movements.enqueue(movement);
        }
    }
}