export interface TextData {
    text: string;
};

export interface CutsceneTextData extends TextData {
    appearsAt: number
    limits: number
};

export type AnyTextData = TextData | CutsceneTextData;