import Phaser from 'phaser';
import { eventMap } from '~/assets/event/eventMap';
import { globals } from '~/util/globals';
import { TextArea } from '~/objects/TextArea';
import { GLOBALTIME } from '~/util/constants';
import { EventData } from '~/util/interface/EventData';
import { EventId } from '~/util/interface/EventId';

interface GameStuffNull {
    created: false
}

interface GameStuffLoaded {
    created: true
    textArea: TextArea
    keyW: Phaser.Input.Keyboard.Key
    keyS: Phaser.Input.Keyboard.Key
    keyA: Phaser.Input.Keyboard.Key
    keyD: Phaser.Input.Keyboard.Key
}


interface EventStuffNull {
    eventRunning: false
}

interface EventStuffRunning {
    eventRunning: true
    startTime: number
    eventData: EventData
}

export default class Map0Scene extends Phaser.Scene {
    private gameStuff: GameStuffLoaded | GameStuffNull = {
        created: false
    }
    private eventStuff: EventStuffNull | EventStuffRunning = {
        eventRunning: false
    }

    private logMovementTimer = 0;
    private creatureMovementTimer = 0;

    private _moveCounter = 0;

    constructor() {
        super({ key: "start" });
    }

    init() {
        this.eventStuff = { eventRunning: false }
    }

    preload() {
        this.load.image("textArea", "ui/text.png");

    }

    create() {
        const textArea = new TextArea(this, []);
        const keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        const keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        const keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        const keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.gameStuff = {
            created: true, textArea, keyW, keyA, keyS, keyD
        };

        this.input.keyboard.on("keydown-ENTER", (event) => {
            if (this.timeStopped() === "log")
                return;
            if (textArea.currentText === null)
                textArea.nextTexts();
            else
                textArea.skipTexts();
        });
        this.input.keyboard.on("keydown-SHIFT", () => {
            textArea.toggleLog(true);
        })
        this.input.keyboard.on("keydown-ESC", () => {
            textArea.toggleLog(false);
        })

        this.handleWorldEvent(`map0story`);
    }

    // updates
    update(time: number, delta: number): void {
        if (!this.gameStuff.created)
            return;

        const timeStopped = this.timeStopped();

        if (timeStopped === "log") {
            this.logUpdate(delta);
            return;
        }

        if (timeStopped === "stop")
            return;

        if (this.creatureMovementTimer > 0)
            this.creatureMovementTimer -= delta;
        if (this.creatureMovementTimer <= 0)
            this.turnAction(timeStopped);
    }

    logUpdate(delta: number) {
        if (!this.gameStuff.created)
            return;

        if (this.logMovementTimer > 0)
            this.logMovementTimer -= delta;
        if (this.logMovementTimer <= 0) {
            if (this.gameStuff.keyW.isDown)
                this.gameStuff.textArea.changeLog(-1);
            else if (this.gameStuff.keyS.isDown)
                this.gameStuff.textArea.changeLog(1);

            this.logMovementTimer = GLOBALTIME / 2;
        }
    }
    
    turnAction(timeStopped: "event" | "running"): void {
        if (!this.gameStuff.created)
            return;

        if (timeStopped === "event" && this.eventStuff.eventRunning) {
            const added = this.eventTurnAction()
            
            if (added) 
                return;
        }

        this.checkEventEnd();
        this._moveCounter += 1;
        this.creatureMovementTimer = GLOBALTIME;
    }

    eventTurnAction(): void | true {
        if (!this.gameStuff.created || !this.eventStuff.eventRunning)
            return;

        const eventData = this.eventStuff.eventData;
        const startTime = this.eventStuff.startTime;

        // Adds text
        const filteredScenes = eventData.textData.filter(textData =>
            !textData.appearsAt || textData.appearsAt === this._moveCounter - startTime);
        eventData.textData = eventData.textData.filter(textData =>
            textData.appearsAt && textData.appearsAt !== this._moveCounter - startTime);
        let added = filteredScenes.length > 0

        for (let textData of filteredScenes)
            this.gameStuff.textArea.appendTexts(textData);

        if (added)
            return true;
    }


    checkEventEnd() {
        if (this.eventStuff.eventRunning &&
            this._moveCounter - this.eventStuff.startTime >= (this.eventStuff.eventData.endsAt ?? 0)) {
            if (this.eventStuff.eventData.warps)
                this.scene.start("game", this.eventStuff.eventData.warps);
            else if (this.eventStuff.eventData.end) {
                if (this.eventStuff.eventData.end === "TrueEnd")
                    this.scene.start("end", { type: "True" });
                else if (this.eventStuff.eventData.end === "BadEnd")
                    this.scene.start("end", { type: "Bad" });
            }
            else
                this.eventStuff = { eventRunning: false };
        }
    }

    handleWorldEvent(eventId: EventId) {
        if (!this.gameStuff.created)
            return;
        if (globals.eventsTriggered.includes(eventId))
            return;

        globals.eventsTriggered.push(eventId);

        const eventData = eventMap.get(eventId)

        if (!eventData)
            return;

        this.eventStuff = {
            eventRunning: true,
            eventData,
            startTime: this._moveCounter
        };
    };

    timeStopped(): "log" | "stop" | "event" | "running" {
        if (this.gameStuff.created === false)
            return "stop";

        const textArea = this.gameStuff.textArea;

        if (textArea.logOn)
            return "log"
        if (this.eventStuff.eventRunning)
            if (this._moveCounter - this.eventStuff.startTime >= textArea.lastLimits
                && textArea.lastStopTime)
                return "stop";
            else
                return "event";
        else if (textArea.lastStopTime)
            return "stop";
        else
            return "running"
    }

    get moveCounter() {
        return this._moveCounter;
    }
}
