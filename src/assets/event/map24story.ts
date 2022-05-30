import { EventData } from "~/util/interface/EventData";

export const map24story: EventData = {
    mapId: "map24",
    endsAt: 5,
    playerMovement: [
        { type: "cnst", dir: { mapX: 0, mapY: 1 }, dur: { start: 0, end: 3 } }
    ],
    textData: [
        {
            text: "왕은 힘겨운 몸을 이끌고 마탑을 나섰어요.",
            limits: 0
        },
        {
            text: "탑을 나오자 하늘 높이 떠 있는 해가 왕을 반겼어요.",
            limits: 0,
        },
        {
            text: "그는 감히 왕의 이름을 참칭했으며 아름드리의 낮을 앗아가려 한 죄인, 마왕을 처치하고 오는 길이었죠.",
            limits: 0
        },
        {
            text: "비록 아무도 왕을 해칠 수 없다지만, 마왕과의 전투는 힘겨웠던 것 같아요.",
            limits: 0
        },
        {
            text: "하지만 결국 마왕은 죽었고, 아름드리의 낮은 돌아왔어요.",
            limits: 2
        },
        {
            text: "그 순간, 왕은 뺨을 타고 흘러내리는 눈물을 발견했어요.",
            limits: 2
        },
        {
            text: "하지만 슬플 이유가 없었기에, 왕은 자신이 어째서 눈물을 흘리고 있는지 이해할 수 없었어요.",
            limits: 2,
        },
        {
            text: "하지만 왕에게는 아직 할 일이 많이 남아 있었어요.",
            appearsAt: 2,
            limits: 3
        },
        {
            text: "왕은 더 이상 신경쓰지 않고, 눈물을 닦고는 성으로 돌아갔어요.",
            appearsAt: 2,
            limits: 3
        }
    ],
    mapChange: [],
    creatures: [],
    end: "TrueEnd"
};