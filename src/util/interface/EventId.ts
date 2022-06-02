type ToStringAble = string | number | bigint | boolean | null | undefined

type T<P extends string, L, S extends string> =
    L extends [infer First, ...infer Rest] ? First extends ToStringAble ? `${P}${First}${S}` | T<P, Rest, S> : never : never;

type T2<P extends string, L> =
    L extends [infer First, ...infer Rest] ? First extends ToStringAble ? `${P}${First}` | T2<P, Rest> : never : never;

type MapStoryEventId = T<"map", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "story">;
type TowerStairsEventId = T2<"towerStairs", [1, 2, 3, 4, 5]>

export type EventId = MapStoryEventId | TowerStairsEventId
    | "towerOpenSesame" | "portal" | "crossingTheLine" | "exitCastle"
    | "enterCastle" | "enterTower" | "enterChamber" | "killWizard" ;