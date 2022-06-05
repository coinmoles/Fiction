import Phaser from 'phaser';
import { resetMap } from '~/assets/map/mapMap';
import { randomTrivia } from '~/assets/trivia/trivia';
import { AlarmObject } from '~/objects/AlarmObject';
import { Controls } from '~/objects/Controls';
import { resetGlobals } from '~/util/globals';
import { AlarmData } from '~/util/interface/AlarmData';
import { FULLHEIGHT, FULLWIDTH, ORIGINX, ORIGINY, TILESIZE } from '~/util/scaleConstants';

const MAXCHOICE = 3;

interface AlarmStuffNull {
    alarm: false
}

interface AlarmStuffActive {
    alarm: true,
    alarmTimer: number,
    alarmObject: AlarmObject
}

export default class MainMenuScene extends Phaser.Scene {
    private controls: Controls | null = null
    private alarmStuff: AlarmStuffActive | AlarmStuffNull = { alarm: false }
    private title: Phaser.GameObjects.Text | null = null;
    private choices: (Phaser.GameObjects.Text | null)[] = [null, null, null];
    private choice: number = 0;
    private timer: number = 0;

    constructor() {
        super({ key: "main", active: true })
    }

    preload() {
        this.load.image("textwoArea", "ui/textwo.png")
    }
    create() {
        this.controls = new Controls(this, false);

        this.title = this.add.text(
            FULLWIDTH / 2, ORIGINY + TILESIZE * 5/2,
            "마법 나라의 왕 이야기",
            { fontSize: `${TILESIZE / 2}pt` },
        ).setOrigin(0.5).setPadding(TILESIZE / 10, TILESIZE / 10, TILESIZE / 10, TILESIZE / 10)

        this.add.text(
            FULLWIDTH / 2, ORIGINY + TILESIZE * 13/4,
            "(선택-십자키/WASD, 확인-ENTER)",
            { fontSize: `${TILESIZE / 6}pt` }
        ).setOrigin(0.5).setPadding(TILESIZE / 10, TILESIZE / 10, TILESIZE / 10, TILESIZE / 10)

        this.choices[0] = this.add.text(
            ORIGINX + TILESIZE * 15/2, ORIGINY + TILESIZE * 6,
            "새 게임",
            { fontSize: `${TILESIZE / 4}pt` }
        ).setOrigin(1).setPadding(TILESIZE / 10, TILESIZE / 10, TILESIZE / 10, TILESIZE / 10);
        this.choices[1] = this.add.text(
            ORIGINX + TILESIZE * 15/2, ORIGINY + TILESIZE * 27/4,
            "이어하기",
            { fontSize: `${TILESIZE / 4}pt` }
        ).setOrigin(1).setPadding(TILESIZE / 10, TILESIZE / 10, TILESIZE / 10, TILESIZE / 10);
        this.choices[2] = this.add.text(
            ORIGINX + TILESIZE * 15/2, ORIGINY + TILESIZE * 15/2,
            "트리비아", { fontSize: `${TILESIZE / 4}pt` }
        ).setOrigin(1).setPadding(TILESIZE / 10, TILESIZE / 10, TILESIZE / 10, TILESIZE / 10);

        this.adjustFill();
    }

    update(time: number, delta: number): void {
        if (this.controls === null)
            return;

        if (!this.alarmStuff.alarm) {
            this.timer += delta;
            if (this.timer > 300) {
                if (this.controls.checkUp() || this.controls.checkDown()) {
                    if (this.controls.checkUp())
                        this.choice += this.choices.length - 1;
                    else if (this.controls.checkDown())
                        this.choice += 1
                    this.choice %= this.choices.length;
                    this.timer = 0;
                    this.adjustFill()
                }

                if (this.controls.checkEnter()) {
                    if (this.choice === 0) {
                        resetGlobals();
                        resetMap();
                        console.log("hmm");
                        this.scene.start("start");
                    }
                    else if (this.choice === 1)
                        this.showAlarm("그런 건 업따!", "세이브 기능 만들 시간이 없었어요ㅠ\n원래 옛날 게임들은 다 세이브 없었대요\n대신 난이도를 쉽게 했으니까 괜찮지 않을까요?\nF5 누르면 날아가니까 조심하세요");
                    else if (this.choice === 2)
                        this.showAlarm(randomTrivia());
                }
            }
        }

        else {
            if (this.alarmStuff.alarmTimer > 0)
                this.alarmStuff.alarmTimer -= delta;
            if (this.controls.checkEnter() && this.alarmStuff.alarmTimer <= 0) {
                this.destroyAlarm()
                this.timer = 0
            }
        }
    }

    adjustFill() {
        for (let i = 0; i < this.choices.length; i++) {
            if (i === this.choice)
                this.choices[i]?.setFill("#ffff00");
            else
                this.choices[i]?.setFill("#ffffff");
        }
    }

    showAlarm(message: AlarmData)
    showAlarm(title: string, body: string)
    showAlarm(arg1: AlarmData | string, arg2?: string) {
        let title, body;
        if (typeof arg1 === "string" && typeof arg2 === "string") {
            title = arg1;
            body = arg2
        }
        else if (typeof arg1 !== "string" && "title" in arg1) {
            title = arg1.title;
            body = arg1.body;
        }
        else {
            return;
        }

        if (this.alarmStuff.alarm)
            return;

        this.alarmStuff = {
            alarm: true,
            alarmObject: new AlarmObject(this, title, body),
            alarmTimer: 1000
        }
    }

    destroyAlarm() {
        if (!this.alarmStuff.alarm)
            return;

        this.alarmStuff.alarmObject.destroy(true, true);
        this.alarmStuff = {
            alarm: false,
        }
    }
}
