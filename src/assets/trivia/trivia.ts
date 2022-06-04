import { globals } from "~/globals";
import { AlarmData, TriviaData } from "~/util/interface/AlarmData";

export const trivia: TriviaData[] = [
    {
        title: "버그에 대해서",
        body: "버그가 있다면 그것은 개발기간이 2주라 그래요\n너그러운 마음으로 양해해주세여!",
        afterClear: false
    },
    {
        title: "컷신에 대해서",
        body: "원래는 컷신이나 타이틀이나 엔딩에\n멋진 그림이 있으려고 했는데\n시간과 그림실력이 부족했어요\n너그러운 마음으로 양해해주세여!",
        afterClear: false
    },
    {
        title: "엔딩 후 트리비아",
        body: "엔딩 후에 추가되는 트리비아가 많은데\n원래는 2회차 플레이시 맵에서 아이템을 주우면\n볼 수 있게 만들려고 했어요\n근데 그런 걸 만들 시간이 없었어요ㅠ\n그래도 많이 확인해줬으면 좋겠어요!",
        afterClear: false
    },
    {
        title: "미완성 기능들에 대해서",
        body: "변명처럼 들릴지도 모르지만\n마지막 날에 이걸 끗내야 했는데\n전날인 금요일에 풋살하다 발을 헛디뎌서 접질려서\n정형외과 다녀오느라 시간이 없었어요ㅠ\n업데이트로 추가할지도?",
        afterClear: false
    },
    {
        title: "초대왕의 검",
        body: "초대왕의 검이 등장하는 건\n(사실 많이 쓰지는 않았지만)\n주인공이 선대왕들의 무기를 쓰는\n파이널 판타지 15라는 게임의 영향을 받았어요!",
        afterClear: true
    },
    {
        title: "밤의 저주",
        body: "낮의 길이가 점점 줄어들다 영원한 밤이 오는 건\n파이널 판타지 15라는 게임을 따라했어요!\n거기서는 밤에만 활동할 수 있는 시해라는 괴물들로\n세계를 멸망시키려는 악역이 비슷한 저주를 썼어요",
        afterClear: false
    },
    {
        title: "왕의 희생",
        body: "왕이 희생해야 하는 것을 친구가 대신 희생하는 건\n파이널 판타지 15라는 게임의 영향을 받았어요!\n거기서는 악역을 물리치기 위해서\n주인공이 선택받은 왕으로서 희생해야 했어요\n근데 If 스토리로 친구가 대신 희생하는 게 있어요",
        afterClear: true
    },
    {
        title: "마법사의 유언",
        body: '사실 거의 비슷하지 않긴 하지만 마법사의 유언은\n파이널 판타지 15 영화의 영향을 받았어요!\n거기서도 왕을 위해 희생한 주인공의 유언이\n"Not the worst way to go...\nRule well, young king"이에요!',
        afterClear: true
    },
    {
        title: "동화체에 대해서",
        body: "이 소설이 동화체로 쓰인 건\n그림자 자국 이라는 소설의 영향을 받았어요!\n이영도 작가님 작품 중에서\n유일하게 동화체로 쓰인 작품인데\n엄청 재밌게 읽었어요",
        afterClear: true
    },
    {
        title: "서술 트릭?",
        body: "등장인물들이 이름이 아닌 호칭으로만 불리는 건\n그림자 자국이라는 소설의 영향을 받았어요!\n사실 의도하고 한 건 아니었는데\n그게 서술 트릭에 쓰인다는 것도 닮았네요",
        afterClear: true
    },
    {
        title: "마법도 나라도 아닌",
        body: "초반부의 저 서술은\n눈물을 마시는 새라는 소설의 영향을 받았어요!\n거기서도 영웅왕, 영웅도 아니고 왕도 아닌\n에 대한 서술이 나오죠",
        afterClear: false
    },
    {
        title: "서술 트릭?",
        body: "등장인물들이 이름이 아닌 호칭으로만 불리는 건\n그림자 자국이라는 소설의 영향을 받았어요!\n사실 의도하고 한 건 아니었는데\n그게 서술 트릭에 쓰인다는 것도 닮았네요",
        afterClear: true
    },
    {
        title: "도대체 뭐가...",
        body: "도대체 뭐가 어떻게 된 거냐는 말은 참 이상해요\n라는 말에 대한 서술이 있었는데\n이건 퓨쳐 워커라는 소설에서 가져왔어요\n너무 맘에 드는 부분이라 그대로 가져왔는데\n교육 목적이니까 고소당하진 않겠죠?",
        afterClear: false
    },
    {
        title: "현실 조작!",
        body: "작중 등장하는 현실 조작 마법은\n페르소나 5라는 게임의 영향을 받았어요\n거기서는 비슷한 마법으로\n자신이 사고로 죽게 된 여동생이라고 믿게 된\n캐릭터가 등장해요",
        afterClear: true
    },
];

export const randomTrivia = (): AlarmData => {
    let i = 0;

    while (1) {
        i = Math.floor(Math.random() * trivia.length)
    
        if (globals.clear || !trivia[i].afterClear)
            break;
    }
    
    return (trivia[i])
}