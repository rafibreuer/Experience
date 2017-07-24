import * as types from './types';

function addErrorsSuccess(errorObj: any) {
    return {
        type: types.ADD_ERROR_SUCCESS,
        payload: errorObj
    }
}

function removeErrorSuccess(errorObj: any) {
    return {
        type: types.REMOVE_ERROR_SUCCESS,
        payload: errorObj
    }
}

function FormIsSubmited(isSubmitted: boolean) {
    return {
        type: types.FORM_IS_SUBMITTED,
        payload: isSubmitted
    }
}
function addShouldSubmit(shouldSubmitObj: object) {
    return {
        type: types.ADD_SHOULD_SUBMIT,
        payload: shouldSubmitObj
    }
}

function changeShouldSubmit(shouldSubmitObj: any) {
    return {
        type: types.CHANGE_SHOULD_SUBMIT,
        payload: shouldSubmitObj
    }
}

function clearShouldSubmit() {
    return {
        type: types.CLEAR_SHOULD_SUBMIT,
        payload: []
    }
}

export {
    addErrorsSuccess,
    removeErrorSuccess,
    FormIsSubmited,
    addShouldSubmit,
    changeShouldSubmit,
    clearShouldSubmit

}