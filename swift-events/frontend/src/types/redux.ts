export interface ReduxErrorObj {
    name: string;
    message: string;

}

export interface FormGroupReduxProps {
    addErrorsSuccess: (object: ReduxErrorObj) => object;
    FormIsSubmited: (boolean: boolean) => boolean;
    addShouldSubmit: (object: ReduxShouldSubmitObj) => object;
    changeShouldSubmit: (object: ReduxShouldSubmitObj) => object;
    formIsSubmited: boolean;
}
export interface InputReduxProps {
    removeErrorSuccess: (object: ReduxErrorObj) => object;
    errors: [ReduxErrorObj];
    addErrorsSuccess: (object: ReduxErrorObj) => object;
    FormIsSubmited: (boolean: boolean) => boolean;
    addShouldSubmit: (object: ReduxShouldSubmitObj) => object;
    changeShouldSubmit: (object: ReduxShouldSubmitObj) => object;
    formIsSubmited: boolean;
}
export interface FormReduxProps {
    FormIsSubmited: (boolean: boolean) => boolean;
    shouldSubmit: [ReduxShouldSubmitObj];
    clearShouldSubmit: () => void;
    formIsSubmited: boolean;
}

export interface ReduxShouldSubmitObj {
    name: string;
    shouldSubmit: boolean;

}