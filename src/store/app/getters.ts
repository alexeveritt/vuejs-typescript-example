import {AppState} from "../type-defs";

export const getters = {
    value: (state: AppState): number => state.value
};