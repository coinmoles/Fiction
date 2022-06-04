import { cloneDeep } from "lodash"

interface Globals {
    playerWill: number
    eventsTriggered: string[]
    clear: boolean
    logTexts: string[]
}

const DEFAULTGLOBALS: Globals = {
    playerWill: 8,
    eventsTriggered: [],
    clear: false,
    logTexts: []
}

export let globals = cloneDeep(DEFAULTGLOBALS);

export const resetGlobals = () => {
    globals = cloneDeep(DEFAULTGLOBALS);
}