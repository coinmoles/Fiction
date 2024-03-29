import { EventData } from "~/util/interface/EventData";
import { EventId } from "~/util/interface/EventId";
import { badend } from "./badend";
import { cantgo } from "./cantgo";
import { crossingTheLine } from "./crossingTheLine";
import { enterCastle } from "./enterCastle";
import { enterChamber } from "./enterChamber";
import { enterTower } from "./enterTower";
import { exitCastle } from "./exitCastle";
import { falldown } from "./falldown";
import { fireball } from "./fireball";
import { map0story } from "./map0story";
import { map10story } from "./map10story";
import { map11story } from "./map11story";
import { map16story } from "./map16story";
import { map17story } from "./map17story";
import { map18story } from "./map18story";
import { map19story } from "./map19story";
import { map1story } from "./map1story";
import { map20story } from "./map20story";
import { map21story } from "./map21story";
import { map22story } from "./map22story";
import { map23story } from "./map23story";
import { map24story } from "./map24story";
import { map25story } from "./map25story";
import { map2story } from "./map2story";
import { map8story } from "./map8story";
import { towerOpenSesame } from "./towerOpenSesame";
import { towerStairs1 } from "./towerStairs1";
import { towerStairs2 } from "./towerStairs2";
import { towerStairs3 } from "./towerStairs3";
import { towerStairs4 } from "./towerStairs4";
import { towerStairs5 } from "./towerStairs5";

export const eventMap: Map<EventId, EventData> = new Map();

eventMap.set("map0story", map0story);
eventMap.set("map1story", map1story);
eventMap.set("map2story", map2story);
eventMap.set("map8story", map8story);
eventMap.set("map10story", map10story);
eventMap.set("map11story", map11story);
eventMap.set("map16story", map16story);
eventMap.set("map17story", map17story);
eventMap.set("map18story", map18story);
eventMap.set("map19story", map19story);
eventMap.set("map20story", map20story);
eventMap.set("map21story", map21story);
eventMap.set("map22story", map22story);
eventMap.set("map23story", map23story);
eventMap.set("map24story", map24story);
eventMap.set("map25story", map25story)
eventMap.set("towerOpenSesame", towerOpenSesame);
eventMap.set("towerStairs1", towerStairs1);
eventMap.set("towerStairs2", towerStairs2);
eventMap.set("towerStairs3", towerStairs3);
eventMap.set("towerStairs4", towerStairs4);
eventMap.set("towerStairs5", towerStairs5);
eventMap.set("enterCastle", enterCastle);
eventMap.set("exitCastle", exitCastle);
eventMap.set("enterTower", enterTower);
eventMap.set("enterChamber", enterChamber);
eventMap.set("crossingTheLine", crossingTheLine);
eventMap.set("badend", badend);
eventMap.set("cantgo", cantgo);
eventMap.set("falldown", falldown);
eventMap.set("fireball", fireball);