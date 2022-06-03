import { EventData } from "~/util/interface/EventData";

export const map24story: EventData = {
    mapId: "map24",
    endsAt: 5,
    playerMovement: [
        { type: "cnst", dir: { mapX: 0, mapY: 1 }, dur: { start: 0, end: 3 } }
    ],
    textData: [
        {
            text: "아이는 마탑에서 나왔어요.",
            limits: 0
        },
        {
            text: "그래도 마법사 왕에게 검은 제대로 건네줬으니, 자신의 역할은 다 했다고, 아이는 생각했어요.",
            limits: 0
        },
        {
            text: "그래서인지는 모르겠지만, 어느새 아름드리에 낮이 다시 찾아왔어요.",
            limits: 2
        },
        {
            text: "마법사 왕이 자신이 건넨 검으로 낮을 되찾아줬다고 생각하며, 아이는 기쁜 마음으로 집으로 돌아갔답니다.",
            limits: 2
        },
        {
            text: "그 순간, 아이는 뺨을 타고 흘러내리는 눈물을 발견했어요.",
            limits: 2
        },
        {
            text: "하지만 슬플 이유가 없었기에, 아이는 어째서 자신이 눈물을 흘리고 있는지 이해할 수 없었어요.",
            limits: 2,
        }, 
        {
            text: "아이는 눈물을 닦고는 성으로 발걸음을 옮겼습니다.",
            appearsAt: 2,
            limits: 3
        },
        {
            text: "하늘 높이 떠 있는 해가 밝게 빛나며 아이를 반겼습니다.",
            appearsAt: 2,
            limits: 3,
        },
    ],
    mapChange: [],
    creatures: [],
    end: "TrueEnd"
};