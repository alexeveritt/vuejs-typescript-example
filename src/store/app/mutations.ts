import {AppState, MutationTypes} from '../type-defs';

export const mutations = {
    [MutationTypes.ADD_VALUE](state: AppState, value: any): void {
        state.value += value;
    },
    [MutationTypes.RESET_VALUE](state: AppState): void {
        state.value = 0;
    }
};