import { EventData } from "~/util/interface/EventData";

export const map22story: EventData = {
    mapId: "map22",
    endsAt: 3,
    playerMovement: [
        { type: "cnst", dur: { start: 0, end: 1 }, dir: { mapX: 0, mapY: -1 } },
        { type: "cnst", dur: { start: 1, end: 2 }, dir: { mapX: -1, mapY: 0 } }
    ],
    textData: [
        {
            text: "수많은 장애물들을 헤치며 뒤돌아보지 않고 걸은 지 얼마나 되었을까, 아이는 더 이상 오를 계단이 없다는 것을 깨닫았어요.",
            limits: 1
        },
        {
            text: "어느새 탑의 맨 위층에 도착한 것이었죠.",
            limits: 1
        },
        {
            text: "아이는 주변을 둘러봤어요.",
            limits: 1
        },
        {
            text: "커다란, 닫힌 문이 가장 먼저 눈앞에 들어왔지만, 아이의 주의를 끈 것은 문 앞에 뒤집힌 채로 떨어져 있는 액자였어요.",
            limits: 2
        },
        {
            text: "아이에게 명품을 감별하는 눈은 없었지만, 대충 봐도 매우 고급스러운 액자인 것을 알 수 있었어요.",
            appearsAt: 2,
            limits: 2
        },
        {
            text: "아이는 조심스럽게 액자를 집어 들었어요. 그러자 그 안에 있는 그림이 드러났어요.",
            appearsAt: 3,
            limits: 3
        },
        {
            text: "그림을 본 아이는 깜짝 놀랐어요. 그도 그럴 만했지요.",
            appearsAt: 3
        },
        {
            text: "그림에 그려져 있는 것은 다름아닌 아이 자신의 모습이었으니까요.",
            appearsAt: 3
        },
        {
            text: "아직 스스로도 자각하지 못한 것 같았지만, 그 순간 아이는 무언가를 깨닫았어요.",
            appearsAt: 3
        }
    ],
    mapChange: [{ appearsAt: 3 }],
    creatures: []
};