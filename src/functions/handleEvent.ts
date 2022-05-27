// import { globals } from "~/globals";
// import { TextArea } from "~/objects/TextArea";
// import GameScene from "~/scenes/GameScene";
// import { EventId } from "~/util/interface/EventId";

// export const handleEvent = (textArea: TextArea, eventId: EventId) => {
//     if (!scene.gameComponents.created)
//         return;
//     if (!scene.mapData)
//         return;
//     if (globals.eventsTriggered.includes(eventId))
//         return;

//     globals.eventsTriggered.push(eventId);


//     const cutscene = cutscenemap.get()

//     const regex = /^map[0-9]+story$/g;
//     if (regex.test(eventId))
//         this.gameComponents.textArea.appendTexts(this.mapData.textData);
//     else if (regex2.test(eventId) && this.mapData.cutscene) {
//         this.cutsceneRunning = true;
//         this.gameComponents.player.addMovement(this, this.mapData.cutscene.playerMovement);
//         this.cutsceneStartTime = 0;
//     }
//     if (eventId === "towerOpenSesame") {
//         towerOpenSesame(this.gameComponents.textArea);
//         this.reloadMap();
//     }
//     if (eventId === "portal") {
//         portal(this.gameComponents.textArea);
//         this.reloadMap();
//     }
// };
