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
    ["cicw0", "map/castleInterior/castleInCarpet10.png"],
    ["cicw1", "map/castleInterior/castleInCarpet11.png"],
    ["cicw2", "map/castleInterior/castleInCarpet12.png"],
    ["cf   ", "map/castleInterior/castleInFloor00.png"],
    ["ciw00", "map/castleInterior/castleInWall00.png"],
    ["ciw01", "map/castleInterior/castleInWall01.png"],
    ["ciw02", "map/castleInterior/castleInWall02.png"],
    ["ciw10", "map/castleInterior/castleInWall10.png"],
    ["ciw11", "map/castleInterior/castleInWall11.png"],
    ["ciw12", "map/castleInterior/castleInWall12.png"],
    ["ciw20", "map/castleInterior/castleInWall20.png"],
    ["ciw21", "map/castleInterior/castleInWall21.png"],
    ["ciw22", "map/castleInterior/castleInWall22.png"],
    ["cc00 ", "map/castleInterior/castleCeiling00.png"],
    ["cc01 ", "map/castleInterior/castleCeiling01.png"],
    ["cc02 ", "map/castleInterior/castleCeiling02.png"],
    ["cc_00", "map/castleInterior/castleCeiling_00.png"],
    ["cc_01", "map/castleInterior/castleCeiling_01.png"],
    ["cc_10", "map/castleInterior/castleCeiling_10.png"],
    ["cc_11", "map/castleInterior/castleCeiling_11.png"],
    ["cc_20", "map/castleInterior/castleCeiling_20.png"],
    ["cc_21", "map/castleInterior/castleCeiling_21.png"],
    ["cd00 ", "map/castle/castleDoor00.png"],
    ["cd01 ", "map/castle/castleDoor01.png"],
    ["cd02 ", "map/castle/castleDoor02.png"],
    ["cd10 ", "map/castle/castleDoor10.png"],
    ["cd11 ", "map/castle/castleDoor11.png"],
    ["cd12 ", "map/castle/castleDoor12.png"],
    ["cd20 ", "map/castle/castleDoor20.png"],
    ["cd21 ", "map/castle/castleDoor21.png"],
    ["cd22 ", "map/castle/castleDoor22.png"],
    ["cd_s ", "map/castle/castleDoor_s.png"],
    ["cs00 ", "map/castle/castleSlope00.png"],
    ["cs10 ", "map/castle/castleSlope10.png"],
    ["cs20 ", "map/castle/castleSlope20.png"],
    ["cs30 ", "map/castle/castleSlope30.png"],
    ["cs01 ", "map/castle/castleSlope01.png"],
    ["cs11 ", "map/castle/castleSlope11.png"],
    ["cs21 ", "map/castle/castleSlope21.png"],
    ["cs31 ", "map/castle/castleSlope31.png"],
    ["cw00 ", "map/castle/castleWall00.png"],
    ["cw01 ", "map/castle/castleWall01.png"],
    ["cw02 ", "map/castle/castleWall02.png"],
    ["gf00 ", "map/floor/grassFloor00.png"],
    ["gf01 ", "map/floor/grassFloor01.png"],
    ["gf02 ", "map/floor/grassFloor02.png"],
    ["gf10 ", "map/floor/grassFloor10.png"],
    ["gf11 ", "map/floor/grassFloor11.png"],
    ["gf12 ", "map/floor/grassFloor12.png"],
    ["gf20 ", "map/floor/grassFloor20.png"],
    ["gf21 ", "map/floor/grassFloor21.png"],
    ["gf22 ", "map/floor/grassFloor22.png"],
    ["gf_s ", "map/floor/grassFloor_s.png"],
    ["rd00 ", "map/road/road00.png"],
    ["rd01 ", "map/road/road01.png"],
    ["rd02 ", "map/road/road02.png"],
    ["rd10 ", "map/road/road10.png"],
    ["rd11 ", "map/road/road11.png"],
    ["rd12 ", "map/road/road12.png"],
    ["rd20 ", "map/road/road20.png"],
    ["rd21 ", "map/road/road21.png"],
    ["rd22 ", "map/road/road22.png"],
    ["rd_00", "map/road/road_00.png"],
    ["rd_01", "map/road/road_01.png"],
    ["rd_10", "map/road/road_10.png"],
    ["rd_11", "map/road/road_11.png"],
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
tileDataMap.set("cf   ", { texture: "cf   ", passable: true, event: [], warp: null });

// castle interior carpet
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
tileDataMap.set("cicw0", { texture: "cicw0", passable: true, event: [], warp: {
    mapId: "map10", initialLoc: { mapX: 4, mapY: 4 }
} });
tileDataMap.set("cicw1", { texture: "cicw1", passable: true, event: [], warp: {
    mapId: "map10", initialLoc: { mapX: 4, mapY: 4 }
} });
tileDataMap.set("cicw2", { texture: "cicw2", passable: true, event: [], warp: {
    mapId: "map10", initialLoc: { mapX: 4, mapY: 4 }
} });

// castle exterior wall
tileDataMap.set("cw00 ", { texture: "cw00 ", passable: false, event: [], warp: null });
tileDataMap.set("cw01 ", { texture: "cw01 ", passable: false, event: [], warp: null });
tileDataMap.set("cw02 ", { texture: "cw02 ", passable: false, event: [], warp: null });

// castle exterior slope
tileDataMap.set("cs00 ", { texture: "cs00 ", passable: false, event: [], warp: null });
tileDataMap.set("cs01 ", { texture: "cs01 ", passable: false, event: [], warp: null });
tileDataMap.set("cs10 ", { texture: "cs10 ", passable: false, event: [], warp: null });
tileDataMap.set("cs11 ", { texture: "cs11 ", passable: false, event: [], warp: null });
tileDataMap.set("cs20 ", { texture: "cs20 ", passable: false, event: [], warp: null });
tileDataMap.set("cs21 ", { texture: "cs21 ", passable: false, event: [], warp: null });
tileDataMap.set("cs30 ", { texture: "cs30 ", passable: false, event: [], warp: null });
tileDataMap.set("cs31 ", { texture: "cs31 ", passable: false, event: [], warp: null });

// castle exterior door 
tileDataMap.set("cd_s ", { texture: "cd_s ", passable: false, event: [], warp: null });
tileDataMap.set("cd00 ", { texture: "cd00 ", passable: false, event: [], warp: null });
tileDataMap.set("cd01 ", { texture: "cd01 ", passable: false, event: [], warp: null });
tileDataMap.set("cd02 ", { texture: "cd02 ", passable: false, event: [], warp: null });
tileDataMap.set("cd10 ", { texture: "cd10 ", passable: false, event: [], warp: null });
tileDataMap.set("cd11 ", { texture: "cd11 ", passable: false, event: [], warp: null });
tileDataMap.set("cd12 ", { texture: "cd12 ", passable: false, event: [], warp: null });
tileDataMap.set("cd20 ", { texture: "cd20 ", passable: false, event: [], warp: null });
tileDataMap.set("cd21 ", { texture: "cd21 ", passable: true, event: [], warp: {
    mapId: "map8",
    initialLoc: { mapX:3, mapY: 6 }
} });
tileDataMap.set("cd22 ", { texture: "cd22 ", passable: false, event: [], warp: null });

// grass floor
tileDataMap.set("gf00 ", { texture: "gf00 ", passable: true, event: [], warp: null });
tileDataMap.set("gf01 ", { texture: "gf01 ", passable: true, event: [], warp: null });
tileDataMap.set("gf02 ", { texture: "gf02 ", passable: true, event: [], warp: null });
tileDataMap.set("gf10 ", { texture: "gf10 ", passable: true, event: [], warp: null });
tileDataMap.set("gf11 ", { texture: "gf11 ", passable: true, event: [], warp: null });
tileDataMap.set("gf12 ", { texture: "gf12 ", passable: true, event: [], warp: null });
tileDataMap.set("gf20 ", { texture: "gf20 ", passable: true, event: [], warp: null });
tileDataMap.set("gf21 ", { texture: "gf21 ", passable: true, event: [], warp: null });
tileDataMap.set("gf22 ", { texture: "gf22 ", passable: true, event: [], warp: null });
tileDataMap.set("gf_s ", { texture: "gf_s ", passable: true, event: [], warp: null });

// road
tileDataMap.set("rd00 ", { texture: "rd00 ", passable: true, event: [], warp: null });
tileDataMap.set("rd01 ", { texture: "rd01 ", passable: true, event: [], warp: null });
tileDataMap.set("rd02 ", { texture: "rd02 ", passable: true, event: [], warp: null });
tileDataMap.set("rd10 ", { texture: "rd10 ", passable: true, event: [], warp: null });
tileDataMap.set("rd11 ", { texture: "rd11 ", passable: true, event: [], warp: null });
tileDataMap.set("rd12 ", { texture: "rd12 ", passable: true, event: [], warp: null });
tileDataMap.set("rd20 ", { texture: "rd20 ", passable: true, event: [], warp: null });
tileDataMap.set("rd21 ", { texture: "rd21 ", passable: true, event: [], warp: null });
tileDataMap.set("rd22 ", { texture: "rd22 ", passable: true, event: [], warp: null });

// castle celing
tileDataMap.set("cc00 ", { texture: "cc00 ", passable: false, event: [], warp: null });
tileDataMap.set("cc01 ", { texture: "cc01 ", passable: false, event: [], warp: null });
tileDataMap.set("cc02 ", { texture: "cc02 ", passable: false, event: [], warp: null });
tileDataMap.set("cc_00", { texture: "cc_00", passable: false, event: [], warp: null });
tileDataMap.set("cc_01", { texture: "cc_01", passable: false, event: [], warp: null });
tileDataMap.set("cc_10", { texture: "cc_10", passable: false, event: [], warp: null });
tileDataMap.set("cc_11", { texture: "cc_11", passable: false, event: [], warp: null });
tileDataMap.set("cc_20", { texture: "cc_20", passable: false, event: [], warp: null });
tileDataMap.set("cc_21", { texture: "cc_21", passable: false, event: [], warp: null });


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