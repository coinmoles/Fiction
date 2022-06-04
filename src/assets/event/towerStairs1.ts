import { EventData } from "~/util/interface/EventData";

export const towerStairs1: EventData = {
    mapId: "map17",
    endsAt: 6,
    playerMovement: [
        { type: "cnst", dir: { mapX: 0, mapY: 1 }, dur: { start: 0, end: 2 } },
        { type: "cnst", dir: { mapX: 0, mapY: -1 }, dur: { start: 3, end: 5 } },
    ],
    textData: [
        {
            text: "하지만 아이는 꽤나 고집이 센 성격이었답니다.",
            limits: 0
        },
        {
            text: "만나 줄 것처럼 이곳으로 불러낸 다음, 간단한 심부름이나 시키고 집에 돌아가라니요? 그럴 수는 없었습니다.",
            limits: 0
        },
        {
            text: "여기까지 온 이상, 아이는 왕의 얼굴을 보지 않고는 돌아갈 생각이 없었어요.",
            limits: 0
        },
        {
            text: "아이는 균열을 지나쳐 다음 층으로 올라가는 계단으로 향했어요.",
            appearsAt: 0,
            limits: 0
        },
        {
            text: "왕이 이곳에 있는 것은 분명했어요. 그렇다면 계단을 오르다 보면, 왕에게 닿을 수 있을 테였죠",
            appearsAt: 0,
            limits: 0
        },
        {
            text: '"탑을 오를 생각인가요...?" 목소리는 살짝 실망한 듯한, 하지만 예상했다는 듯한 목소리로 말했습니다.',
            appearsAt: 0,
            limits: 0
        },
        {
            text: "아이는 망설이지 않고 고개를 끄덕였어요.",
            appearsAt: 0,
            limits: 0
        },
        {
            text: "목소리는 잠시 침묵했어요. 아이는 목소리가 자신을 설득할 방법을 고민하고 있다고 생각했어요.",
            appearsAt: 0,
            limits: 0
        },
        {
            text: "하지만 아이는 이미 결심을 내린 후였죠.",
            appearsAt: 0,
            limits: 0
        },
        {
            text: "이 탑을 오르다 보면 무엇이 튀어나올지 모르니, 무기를 챙겨서 나쁠 건 없겠죠.",
            appearsAt: 0,
            limits: 2
        },
        {
            text: "왕을 만나면 직접 왕에게 돌려주겠다는 생각으로, 아이는 바닥에 뽑힌 검을 뽑아 들고는 탑을 오르기 시작했습니다.", 
            appearsAt: 3,
            limits: 4
        },
    ],
    mapChange: [{ appearsAt: 3 }],
    creatures: [],
    badEndCheck: true,
    warps: {
        mapId: "map18",
        playerInitLoc: { mapX: 4, mapY: 0 },
        playerInitAnim: "frontIdle"
    }
};
