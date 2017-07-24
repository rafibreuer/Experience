import { CreateUser, Login } from '../../types/users'

export interface SignUpFormState {
    form: CreateUser,
    serverError: string;
    confirmPassword: string;
    confirmError: string;
}
export interface LoginFormState {
    login: Login,
}