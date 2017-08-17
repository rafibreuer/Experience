import * as types from '../actions/types';

export default function errorsReducer(state: any = [], action: any) {
    switch (action.type) {
        case types.ADD_ERROR_SUCCESS:
            return [...state, action.payload];
        case types.REMOVE_ERROR_SUCCESS:
            return state.filter((e: any) => e.name !== action.payload.name);
        default:
            return state
    }
}