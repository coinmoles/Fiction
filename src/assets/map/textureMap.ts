const textureDataMap = new Map<string, string>([
    // Castle Interior Carpet
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

    // Castle Interior Carpet Warp
    ["cicw0", "map/castleInterior/castleInCarpet10.png"],
    ["cicw1", "map/castleInterior/castleInCarpet11.png"],
    ["cicw2", "map/castleInterior/castleInCarpet12.png"],

    // Castle Floor
    ["cf   ", "map/castleInterior/castleInFloor00.png"],

    // Castle Interior Wall
    ["ciw00", "map/castleInterior/castleInWall00.png"],
    ["ciw01", "map/castleInterior/castleInWall01.png"],
    ["ciw02", "map/castleInterior/castleInWall02.png"],
    ["ciw10", "map/castleInterior/castleInWall10.png"],
    ["ciw11", "map/castleInterior/castleInWall11.png"],
    ["ciw12", "map/castleInterior/castleInWall12.png"],
    ["ciw20", "map/castleInterior/castleInWall20.png"],
    ["ciw21", "map/castleInterior/castleInWall21.png"],
    ["ciw22", "map/castleInterior/castleInWall22.png"],

    // Castle Ceiling
    ["cc00 ", "map/castleInterior/castleCeiling00.png"],
    ["cc01 ", "map/castleInterior/castleCeiling01.png"],
    ["cc02 ", "map/castleInterior/castleCeiling02.png"],
    ["cc_00", "map/castleInterior/castleCeiling_00.png"],
    ["cc_01", "map/castleInterior/castleCeiling_01.png"],
    ["cc_10", "map/castleInterior/castleCeiling_10.png"],
    ["cc_11", "map/castleInterior/castleCeiling_11.png"],
    ["cc_20", "map/castleInterior/castleCeiling_20.png"],
    ["cc_21", "map/castleInterior/castleCeiling_21.png"],

    // Castle Door
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

    // Castle Slope
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

    // Grass Floor
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

    // Road
    ["rd00 ", "map/road/road00.png"],
    ["rd01 ", "map/road/road01.png"],
    ["rd02 ", "map/road/road02.png"],
    ["rd10 ", "map/road/road10.png"],
    ["rd11 ", "map/road/road11.png"],
    ["rd12 ", "map/road/road12.png"],
    ["rd20 ", "map/road/road20.png"],
    ["rd21 ", "map/road/road21.png"],
    ["rd22 ", "map/road/road22.png"],
    ["rd03 ", "map/road/road_00.png"],
    ["rd04 ", "map/road/road_01.png"],
    ["rd13 ", "map/road/road_10.png"],
    ["rd14 ", "map/road/road_11.png"],

    // Tower
    ["tw00 ", "map/tower/tower00.png"],
    ["tw01 ", "map/tower/tower01.png"],
    ["tw10 ", "map/tower/tower10.png"],
    ["tw11 ", "map/tower/tower11.png"],
    ["tw11t", "map/tower/tower11.png"],
    ["tw12 ", "map/tower/tower12.png"],
    ["tw13 ", "map/tower/tower13.png"],
    ["twc01", "map/tower/towerDoorClosed01.png"],
    ["twc10", "map/tower/towerDoorClosed10.png"],
    ["twc11", "map/tower/towerDoorClosed11.png"],
    ["twc12", "map/tower/towerDoorClosed12.png"],
    ["twfl ", "map/tower/towerFloor.png"],
    ["twfll", "map/tower/towerFloor.png"],
    ["twfld", "map/tower/towerFloor.png"],
    ["twflk", "map/tower/towerFloorP.png"],
    ["twflp", "map/tower/towerFloorP.png"],
    ["twflf", "map/tower/towerFloorFrame.png"],
    ["twfls", "map/tower/towerFloorSword.png"],
    ["twpt ", "map/tower/towerPortal.png"],
    ["twst1", "map/tower/towerStairs.png"],
    ["twst2", "map/tower/towerStairs.png"],
    ["twst3", "map/tower/towerStairs.png"],
    ["twst4", "map/tower/towerStairs.png"],
    ["twst5", "map/tower/towerStairs.png"],
    ["gf21o", "map/floor/grassFloor21.png"],
    ["rd00o", "map/road/road00.png"],
    ["rd01o", "map/road/road01.png"],
    ["rd02o", "map/road/road02.png"],

    // Creatures
    ["fa", "creatures/par.png"],
    ["sol", "creatures/sol.png"]
]);

export const normalTextures = new Map([
    ["mi", "characters/crazy.png"],
    ["textArea", "ui/text.png"],
    ["wpEmpty", "ui/wpEmpty.png"],
    ["wpFull", "ui/wpFull.png"],
])

const flatten = (keys: string[][]) => {
    let x: string[] = [];
    return x.concat(...keys);
}

export const textureLoader = (keys: string[]): Map<string, string> => {
    const keySet = new Set(keys);

    return new Map(
        [...textureDataMap]
            .filter(([k, v]) => keySet.has(k))
    )
}

export const mapTextureLoader = (keys: string[][]): Map<string, string> => {
    const keySet = new Set(flatten(keys));
    
    return new Map(
        [...textureDataMap]
            .filter(([k, v]) => keySet.has(k))
    )
}