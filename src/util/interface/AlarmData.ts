export interface AlarmData {
    title: string
    body: string
}

export interface TriviaData extends AlarmData {
    afterClear: boolean
}