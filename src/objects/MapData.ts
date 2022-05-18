import { MapObject } from "~/objects/Character";
import { COLUMNS, ROWS } from "~/util/scaleConstants";

interface TileData {
    texture: string
    passable: boolean
    event: string[]
    warp: number | null;
}

export class MapData {
    map: TileData[][] = []
    textureMap = new Map<string, string>();
    text: string[]

    constructor(map: TileData[][], textureMap: Map<string, string>, text: string[]) {
        this.map = map;
        this.textureMap = textureMap;
        this.text = text;
    }

    preload (scene: Phaser.Scene) {
        this.textureMap.forEach((value, key) => {
            scene.load.image(key, value);
        })
    }

    create (scene: Phaser.Scene) {
        let tiles: MapObject[][] = [];

        for (let i = 0; i < ROWS; i++) {
            let blockRow: MapObject[] = []
            for (let j = 0; j < COLUMNS; j++) {
                blockRow.push(new MapObject(scene, j, i, this.map[i][j].texture).setDepth(1));
            }
            tiles.push(blockRow);
        }

        return { tiles };
    }
}