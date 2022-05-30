import GameScene from "~/scenes/GameScene";
import { GLOBALTIME } from "~/util/constants";
import { MovementData } from "~/util/interface/MovementData";
import { vector } from "~/util/interface/vector";
import { Creature } from "./Creature";

type PlayerAnims = "frontWalk" | "backWalk" | "leftWalk" | "rightWalk" | "frontIdle" | "backIdle" | "rightIdle" | "leftIdle";

export class Player extends Creature {
    private playingAnimation: PlayerAnims = "frontIdle";

    constructor(scene: GameScene, vec: vector, texture: string, movementDatas: MovementData[]) {
        super(scene, vec, "player", movementDatas);

        this.anims.create({
            key: "frontWalk",
            frames: this.anims.generateFrameNames("player", { prefix: "frontWalk", start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: "backWalk",
            frames: this.anims.generateFrameNames("player", { prefix: "backWalk", start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: "leftWalk",
            frames: this.anims.generateFrameNames("player", { prefix: "leftWalk", start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: "rightWalk",
            frames: this.anims.generateFrameNames("player", { prefix: "rightWalk", start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "frontIdle",
            frames: this.anims.generateFrameNames("player", { prefix: "frontIdle", start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: "backIdle",
            frames: this.anims.generateFrameNames("player", { prefix: "backIdle", start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: "leftIdle",
            frames: this.anims.generateFrameNames("player", { prefix: "leftIdle", start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: "rightIdle",
            frames: this.anims.generateFrameNames("player", { prefix: "rightIdle", start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });
    }

    setAnims(anim: PlayerAnims) {
        if (this.playingAnimation !== anim)
            this.playingAnimation = anim;
        this.play(anim)
    }

    move(movement: vector): void {
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
                this.setMapPosition(mapX + movement.mapX * i / 10, mapY + movement.mapY * i / 10);
                ++i
                if (i === 10) {
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
            repeat: 10,
            delay: GLOBALTIME / 15
        })
    }
}