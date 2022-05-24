import { MapData } from "~/util/interface/MapData";
import { map3 } from "./map3/map";
import { map2 } from "./map2/map";
import { map4 } from "./map4/map";
import { map5 } from "./map5/map";
import { map6 } from "./map6/map";

export const mapMap: Map<string, MapData> = new Map();

mapMap.set("map2", map2);
mapMap.set("map3", map3);
mapMap.set("map4", map4);
mapMap.set("map5", map5);
mapMap.set("map6", map6);