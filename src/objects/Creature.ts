import { Queue } from "queue-typescript";
import { creatureAnimMap } from "~/assets/creatures/creatureMap";
import { createMovement } from "~/movement/createMovement";
import { MovementType } from "~/movement/MovementType";
import GameScene from "~/scenes/GameScene";
import { GLOBALTIME } from "~/util/constants";
import { AnimData } from "~/util/interface/AnimData";
import { MovementData } from "~/util/interface/MovementData";
import { vector } from "~/util/interface/vector";
import { MapObject } from "./MapObject";

type AnimTypes = "frontWalk" | "backWalk" | "leftWalk" | "rightWalk" | "frontIdle" | "backIdle" | "rightIdle" | "leftIdle";

export class Creature extends MapObject {
    public movements = new Queue<MovementType>();
    private playingAnimation: AnimTypes = "frontIdle";

    constructor(scene: GameScene, vec: vector, texture: string, movementDatas: MovementData[])
    constructor(scene: GameScene, mapX: number, mapY: number, texture: string, movementDatas: MovementData[])
    constructor(scene: GameScene, arg1: vector | number, arg2: string | number, arg3: MovementData[] | string, arg4?: MovementData[]) {
        let mapX: number, mapY: number
        let texture: string
        
        
        let movementDatas: MovementData[];
        if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "string" && arg4) {
            mapX = arg1;
            mapY = arg2;
            texture = arg3;
            movementDatas = arg4;
        }
        else if (typeof arg1 !== "number" && typeof arg2 === "string" && Array.isArray(arg3) && !arg4) {
            mapX = arg1.mapX;
            mapY = arg1.mapY;
            texture = arg2;
            movementDatas = arg3;
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

        this.anims.create({
            key: `frontWalk`,
            frames: this.anims.generateFrameNames(texture, { prefix: "frontWalk", start: 0, end: animData.walkFrame - 1 }),
            frameRate: animData.walkFPS,
            repeat: 1
        });
        this.anims.create({
            key: "backWalk",
            frames: this.anims.generateFrameNames(texture, { prefix: "backWalk", start: 0, end: animData.walkFrame - 1 }),
            frameRate: animData.walkFPS,
            repeat: 1
        });
        this.anims.create({
            key: "leftWalk",
            frames: this.anims.generateFrameNames(texture, { prefix: "leftWalk", start: 0, end: animData.walkFrame - 1 }),
            frameRate: animData.walkFPS,
            repeat: 1
        });
        this.anims.create({
            key: "rightWalk",
            frames: this.anims.generateFrameNames(texture, { prefix: "rightWalk", start: 0, end: animData.walkFrame - 1 }),
            frameRate: animData.walkFPS,
            repeat: 1
        });

        this.anims.create({
            key: "frontIdle",
            frames: this.anims.generateFrameNames(texture, { prefix: "frontIdle", start: 0, end: animData.idleFrame - 1 }),
            frameRate: animData.idleFPS,
            repeat: -1
        });
        this.anims.create({
            key: "backIdle",
            frames: this.anims.generateFrameNames(texture, { prefix: "backIdle", start: 0, end: animData.idleFrame - 1 }),
            frameRate: animData.idleFPS,
            repeat: -1
        });
        this.anims.create({
            key: "leftIdle",
            frames: this.anims.generateFrameNames(texture, { prefix: "leftIdle", start: 0, end: animData.idleFrame - 1 }),
            frameRate: animData.idleFPS,
            repeat: -1
        });
        this.anims.create({
            key: "rightIdle",
            frames: this.anims.generateFrameNames(texture, { prefix: "rightIdle", start: 0, end: animData.idleFrame - 1 }),
            frameRate: animData.idleFPS,
            repeat: -1
        });

        this.setAnims("frontIdle")
    }


    setAnims(anim: AnimTypes) {
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