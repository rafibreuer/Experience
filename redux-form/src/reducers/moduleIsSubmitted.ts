import * as types from '../actions/types';


export default function moduleIsSubmitedReducer(state: boolean, action: any) {
    switch (action.type) {
        case types.MODULE_IS_SUBMITTED:
            return  action.payload;
        default:
            return false
    }
}