import * as types from '../actions/types';


export default function formIsSubmitedReducer(state: boolean, action: any) {
    switch (action.type) {
        case types.FORM_IS_SUBMITTED:
            return  action.payload;
        default:
            return false
    }
}