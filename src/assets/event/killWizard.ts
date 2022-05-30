
import { EventData } from "~/util/interface/EventData"

export const killWizard: EventData = {
    mapId: "map23",
    endsAt: 8,
    playerMovement: [
        { type: "cnst", dir: { mapX: 0, mapY: 1 }, dur: { start: 0, end: 4 } },
        { type: "cnst", dir: { mapX: 0, mapY: -2 }, dur: { start: 4, end: 6 } },
        { type: "cnst", dir: { mapX: 0, mapY: 1 }, dur: { start: 7, end: 8 } }
    ],
    textData: [
        {
            text: "이번에도 고민은 길지 않았어요. 왕은 손에 든 초대왕의 검으로 그녀를 찔렀답니다.",
            limits: 0
        },
        {
            text: "피가 쏟아지고, 마법사는 바닥에 쓰러졌어요.",
            limits: 0
        },
        {
            text: "그녀는 정말 강력한 마법사였어요.",
            limits: 4
        },
        {
            text: "비록 진짜 왕은 아니었지만, 왕조차 속일 정도로 강력한 마법으로 스스로 왕이 되려 했고, 거의 성공할 뻔헀죠.",
            limits: 4
        },
        {
            text: "후대 사람들은 그녀를 비웃는, 또는 기리는 의미에서 그녀를 마법사 왕이라고 불렀답니다.",
            limits: 4
        },
        {
            text: "하지만 4글자는 너무 길다고 생각한 게으른 사람들이 많았나 봐요.",
            limits: 4
        },
        {
            text: "그래서 어쩌면 여러분에게도, 마왕이라는 이름이 더 익숙하게 느껴질지도 모르죠.",
            limits: 4
        },
        {
            text: "네, 그녀는 마왕이라는 칭호에 걸맞는 강력한 마법사였답니다.",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "마법이라는 건 기본적으로 자연 법칙을 거스르는 것이라고 했던 말 기억하시나요?",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "마법을 배우려 하는 사람이라면 누구든 가장 처음 배우게 되는, 마법 이론 중에서도 가장 기초적인 내용이지요.",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "하지만 천재들이 늘상 그렇듯, 마왕은 이 단순한 개념에 새로운 접근을 시도했어요.",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "그리고 그녀는 자연 법칙을 거스르는 것을 넘어서, 자연 법칙을 덮어쓰는, 나아가서는 현실 그 자체를 덮어쓰는 마법을 만들었지요.",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "마왕은 마법에 이름을 붙이는 건 유치하다며 별다른 이름을 붙이지 않았고, 마왕의 사후 아무도 이 마법을 재현해낼 수 없었기에",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "이 마법에는 공식적으로는 아무런 이름도 붙여진 적 없었어요.",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "하지만 한 가지 확실한 건, 다짐 정도로는 막을 수 없을 정도로 강력한 마법이었다는 것이었지요.",
            appearsAt: 4,
            limits: 4
        },
        {
            text: "또, 아무리 강력한 마법사라고 해도 저 정도의 마법을 죽음의 경계에서 유지할 수는 없었어요.",
            appearsAt: 4,
            limits: 6,
        },
        {
            text: "현실로 돌아온 왕은 죽어가는 친구를 부둥켜안았습니다.",
            appearsAt: 6,
            limits: 6
        },
        {
            text: "그녀가 현실을 뒤틀어 만든 새로운 현실 속에서는, 뒤틀렸지만 뒤틀리지 않은 진실이 하나 있었어요.",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: "아름드리에 내린 밤의 저주, 그것을 깨기 위해선 그녀를 죽여야 한다는 것이었지요.",
            appearsAt: 6,
            limits: 6
        },
        {
            text: "왜냐하면, 저주를 풀기 위해선 왕의 목숨이 필요했으니까요.",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: "그리고 왕과 마법사가 싸운 이유, 그녀가 말한 짧아진 낮을 되돌리는 방법...",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: "그것은 바로, 그녀의 가장 강한 마법으로 현실을 뒤틀고 그녀 스스로 왕이 되어, 저주를 속이고 왕 대신 그녀가 희생하는 것이었어요.",
            appearsAt: 6,
            limits: 6
        },
        {
            text: "왕은 그 방법을 용납할 수 없었어요. 차라리 자신이 죽는 것이 낫다고 했지요.",
            appearsAt: 6,
            limits: 6
        },
        {
            text: "하지만 그녀는 아름드리 최강의 마법사였어요. 왕의 힘이 있다 한들 그녀를 당해낼 수는 없었지요.",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: "그리고 결국 지금, 마법사가 바라는 대로 됐네요.",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: '"미안해요," 마법사는 말했어요.',
            appearsAt: 6,
            limits: 6
        },
        {
            text: "왕은 자신을 대신해 목숨을 버린 소녀가 자신에게 사과하는 것을 보며, 아무 말도 할 수 없었어요.",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: "아니면 무엇이 미안하냐고 물어야 할까요? 고마워해야 할까요? 미안해해야 할까요? 화를 내야 할까요?",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: "왕은 알 수 없었어요. 하지만 어느새 왕의 눈에선 눈물이 멈추지 않고 흘러내리고 있었어요.",
            appearsAt: 6,
            limits: 6,
        },
        {
            text: "마법사는 울고 있는 왕을 바라보았어요. 그리고 그녀는 마지막 힘을 쥐어짜, 왕의 뒤에 공간의 균열을 만들었어요.",
            appearsAt: 6,
            limits: 7,
        },
        {
            text: '"가세요, 이건 제가 선택한 길이니까... 후회는 없어요.", 마법사는 그렇게 말하며 왕을 밀쳤어요.',
            appearsAt: 7,
            limits: 7,
        },
        {
            text: "아름드리의 어떤 것도 왕을 해칠 수는 없어요, 아니, 왕이 아닌 누구라고 해도, 사경을 헤매는 소녀가 밀친다고 밀릴 리는 없었죠.",
            appearsAt: 7,
            limits: 7
        },
        {
            text: "하지만 왕은 어째서인지 순순히 밀려났어요",
            appearsAt: 7,
            limits: 8
        },
        {
            text: '"나의 왕이여... 안녕히..."',
            appearsAt: 8,
            limits: 8
        }
    ],
    mapChange: [{ appearsAt: 7 }],
    creatures: [],
    warps: {
        mapId: "map24",
        playerInitLoc: { mapX: 4, mapY: 3 }
    }
}