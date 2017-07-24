import { Login, SignUp } from '../../../types/users';
import { ServiceTypeForm } from '../../../types/vendors';
export interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    onChange: (e: any) => void;
    custom?: () => void;
    required: boolean;
    value: any;
    errorMessage: string;
    className?: string;
}
export interface Button {
    buttonName: string;
    className: string;
    onClick?: (e: any) => void;
}
export interface InputState {
    hasError: boolean;
    errorMessage: string;
}
export interface LoginFormState {
    login: Login;
}
export interface SignUpFormState {
    signUp: SignUp;
    vendorCheckbox: boolean
}

export interface FormProps {
    children: any;
    title?: string;
    submit: () => void;
}

export interface FormGroupProps {
    children: any;
    name: string;
}

export interface RadioButtonInputProps {
    radioButtonArray: [string];
    onChange: (e: any) => void;
    required: boolean
}
export interface ServiceTypeForm {
    serviceTypeForm: ServiceTypeForm;
}
export interface CreatePasswordInputProps {
    onChange: (e: any) => void;
    value: string;
}