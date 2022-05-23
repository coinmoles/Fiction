import { cutscene1 } from "~/assets/cutscene/cutscene1";
import { Creature } from "~/objects/Creature";
import { MapObject } from "~/objects/MapObject";
import { TextArea } from "~/objects/TextArea";
import { GLOBALTIME } from "~/util/constants";
import { CutsceneData, CutsceneTextData } from "~/util/interface/CutsceneData";
import { COLUMNS, ROWS } from "~/util/scaleConstants";

interface CutsceneComponentsNull {
    created: false
    mapObjects: null
    map: null
    textArea: null
}

interface CutsceneComponentsLoaded {
    created: true
    creatures: Creature[]
    map: MapObject[][]
    textArea: TextArea<CutsceneTextData>
}

export default class CutScene extends Phaser.Scene {
    private cutSceneData: CutsceneData = cutscene1;
    private gameComponents: CutsceneComponentsLoaded | CutsceneComponentsNull = {
        created: false,
        mapObjects: null,
        map: null,
        textArea: null,
    }

    private movementTimer = 0;
    private _moveCounter = 0;
    private emitter = new Phaser.Events.EventEmitter();

    constructor() {
        super({ key: "cutscene" })
    }

    init(data) {
    }

    preload() {
        this.cutSceneData.textureMap.forEach((value, key) => {
            this.load.image(key, value);
        })
    }

    create() {
        const creatures: Creature[] = []
        for (let creatureData of this.cutSceneData.creatureData) 
            creatures.push(new Creature(this, creatureData.mapX, creatureData.mapY, creatureData.texture, creatureData.movements));
        
        const map: MapObject[][] = []
        for (let i = 0; i < ROWS; i++) {
            let blockRow: MapObject[] = []
            for (let j = 0; j < COLUMNS; j++) {
                blockRow.push(new MapObject(this, j, i, this.cutSceneData.mapData[i][j].texture).setDepth(1));
            }
            map.push(blockRow);
        }

        const textArea = new TextArea<CutsceneTextData>(this, []);

        this.gameComponents = {
            created: true,
            creatures: creatures,
            map,
            textArea
        }
    }

    update(time: number, delta: number): void {
        if (!this.gameComponents.created)
            return;
        if (this.timeStopped())
            return;

        if (this.movementTimer > 0)
            this.movementTimer -= delta;

        if (this.movementTimer <= 0)
            this.turnAction();
    }

    turnAction(): void {
        if (!this.gameComponents.created)
            return;

        for (let textData of this.cutSceneData.textData) {
            if (textData.appearsAt === this._moveCounter) {
                this.gameComponents.textArea.appendTexts(textData);
                if (this.gameComponents.textArea.currentText === null)
                    this.gameComponents.textArea.nextTexts();
            }
        }
        
        for (let creature of this.gameComponents.creatures) {
            creature.turnAction({ mapX: 0, mapY: 0 });
        }

        this.movementTimer = GLOBALTIME;
        this._moveCounter += 1;
    }

    timeStopped(): boolean {
        if (this.gameComponents.created === false)
            return true;
        else if (this.gameComponents.textArea.currentText === null)
            return this.gameComponents.textArea.stopTime;
        else if (this._moveCounter >= this.gameComponents.textArea.currentText.limits)
            return true;
        else
            return false
    }

    get moveCounter() {
        return this.movementTimer
    }
}