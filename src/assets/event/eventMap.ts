import { EventData } from "~/util/interface/EventData";
import { EventId } from "~/util/interface/EventId";
import { crossingTheLine } from "./crossingTheLine";
import { map10story } from "./map10story";
import { map11story } from "./map11story";
import { map16story } from "./map16story";
import { map17story } from "./map17story";
import { map2story } from "./map2story";
import { map8story } from "./map8story";
import { towerOpenSesame } from "./towerOpenSesame";

export const eventMap: Map<EventId, EventData> = new Map();

eventMap.set("map2story", map2story);
eventMap.set("map8story", map8story);
eventMap.set("map10story", map10story);
eventMap.set("map11story", map11story);
// eventMap.set("map16story", map16story);
// eventMap.set("map17story", map17story);
eventMap.set("towerOpenSesame", towerOpenSesame);
eventMap.set("crossingTheLine", crossingTheLine);