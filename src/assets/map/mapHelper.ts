import { TileData } from "~/util/interface/TileData";

const tileDataMap = new Map<string, TileData>();
const textureDataMap = new Map<string, string>([
    ["cic00", "map/castleInterior/castleInCarpet00.png"],
    ["cic01", "map/castleInterior/castleInCarpet01.png"],
    ["cic02", "map/castleInterior/castleInCarpet02.png"],
    ["cic10", "map/castleInterior/castleInCarpet10.png"],
    ["cic11", "map/castleInterior/castleInCarpet11.png"],
    ["cic12", "map/castleInterior/castleInCarpet12.png"],
    ["cic20", "map/castleInterior/castleInCarpet20.png"],
    ["cic21", "map/castleInterior/castleInCarpet21.png"],
    ["cic22", "map/castleInterior/castleInCarpet22.png"],
    ["cic03", "map/castleInterior/castleInCarpet03.png"],
    ["cic04", "map/castleInterior/castleInCarpet04.png"],
    ["cic13", "map/castleInterior/castleInCarpet13.png"],
    ["cic14", "map/castleInterior/castleInCarpet14.png"],
    ["cf", "map/castleInterior/castleInFloor00.png"],
    ["ciw00", "map/castleInterior/castleInWall00.png"],
    ["ciw01", "map/castleInterior/castleInWall01.png"],
    ["ciw02", "map/castleInterior/castleInWall02.png"],
    ["ciw10", "map/castleInterior/castleInWall10.png"],
    ["ciw11", "map/castleInterior/castleInWall11.png"],
    ["ciw12", "map/castleInterior/castleInWall12.png"],
    ["ciw20", "map/castleInterior/castleInWall20.png"],
    ["ciw21", "map/castleInterior/castleInWall21.png"],
    ["ciw22", "map/castleInterior/castleInWall22.png"],
]);

// castle interior wall
tileDataMap.set("ciw00", { texture: "ciw00", passable: false, event: [], warp: null });
tileDataMap.set("ciw01", { texture: "ciw01", passable: false, event: [], warp: null });
tileDataMap.set("ciw02", { texture: "ciw02", passable: false, event: [], warp: null });
tileDataMap.set("ciw10", { texture: "ciw10", passable: false, event: [], warp: null });
tileDataMap.set("ciw11", { texture: "ciw11", passable: false, event: [], warp: null });
tileDataMap.set("ciw12", { texture: "ciw12", passable: false, event: [], warp: null });
tileDataMap.set("ciw20", { texture: "ciw20", passable: false, event: [], warp: null });
tileDataMap.set("ciw21", { texture: "ciw21", passable: false, event: [], warp: null });
tileDataMap.set("ciw22", { texture: "ciw22", passable: false, event: [], warp: null });

// castle interior floor
tileDataMap.set("cf", { texture: "cf", passable: true, event: [], warp: null });

// castle interior carper
tileDataMap.set("cic00", { texture: "cic00", passable: true, event: [], warp: null });
tileDataMap.set("cic01", { texture: "cic01", passable: true, event: [], warp: null });
tileDataMap.set("cic02", { texture: "cic02", passable: true, event: [], warp: null });
tileDataMap.set("cic10", { texture: "cic10", passable: true, event: [], warp: null });
tileDataMap.set("cic11", { texture: "cic11", passable: true, event: [], warp: null });
tileDataMap.set("cic12", { texture: "cic12", passable: true, event: [], warp: null });
tileDataMap.set("cic20", { texture: "cic20", passable: true, event: [], warp: null });
tileDataMap.set("cic21", { texture: "cic21", passable: true, event: [], warp: null });
tileDataMap.set("cic22", { texture: "cic22", passable: true, event: [], warp: null });
tileDataMap.set("cic03", { texture: "cic03", passable: true, event: [], warp: null });
tileDataMap.set("cic04", { texture: "cic04", passable: true, event: [], warp: null });
tileDataMap.set("cic13", { texture: "cic13", passable: true, event: [], warp: null });
tileDataMap.set("cic14", { texture: "cic14", passable: true, event: [], warp: null });

// castle interior 

export const mapLoader = (key: string): TileData => {
    const tileData = tileDataMap.get(key);

    if (!tileData)
        return { texture: "unknown", passable: false, event: [], warp: null };
    return tileData;
}

const flatten = (keys: string[][]) => {
    let x: string[] = [];
    return x.concat(...keys);
}

export const textureMapLoader = (keys: string[][]): Map<string, string> => {
    const keySet = new Set(flatten(keys));
    
    console.log(keys);
    return new Map(
        [...textureDataMap]
        .filter(([k, v]) => keySet.has(k))
    )
}