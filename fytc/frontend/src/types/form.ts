import { CreateUser, Login } from './users'

export interface SignUpFormState {
    form: CreateUser,
    serverError: string;
    confirmPassword: string;
    confirmError: string;
}
export interface LoginFormState {
    login: Login,
}
export interface EditFormState{
    readState:object;
    editState:object;
}