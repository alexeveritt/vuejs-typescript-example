import {MutationTypes} from "../type-defs/";
import {ActionContext} from "vuex";
import {AppState} from "../type-defs";

export const actions = {
    addValue,
    resetValue
};

function addValue({commit, dispatch, state}: ActionContext<AppState, any>, value: number): void {
    if (value && value > 0) {
        commit(MutationTypes.ADD_VALUE, value);
        if (state.value > 10) {
            dispatch('resetValue');
        }
    }
}

function resetValue({commit}: any): void {
    commit(MutationTypes.RESET_VALUE);
}
