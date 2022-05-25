import { TileData } from "~/util/interface/TileData";

const tileDataMap = new Map<string, TileData>();

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
tileDataMap.set("rd03 ", { texture: "rd03 ", passable: true, event: [], warp: null });
tileDataMap.set("rd04 ", { texture: "rd04 ", passable: true, event: [], warp: null });
tileDataMap.set("rd13 ", { texture: "rd13 ", passable: true, event: [], warp: null });
tileDataMap.set("rd14 ", { texture: "rd14 ", passable: true, event: [], warp: null });

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