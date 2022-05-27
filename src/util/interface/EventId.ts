type ToStringAble = string | number | bigint | boolean | null | undefined

type T<P extends string, L, S extends string> =
    L extends [infer First, ...infer Rest] ? First extends ToStringAble ? `${P}${First}${S}` | T<P, Rest, S> : never : never;

export type MapStoryEventId = T<"map", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "story">;

export type EventId = MapStoryEventId | "towerOpenSesame" | "portal" | "crossingTheLine";