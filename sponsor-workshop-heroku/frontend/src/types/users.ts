export interface CreateUser {
    name: string;
    email: string;
    password: string;
    location: string;
    phone: string;
}

export interface Login {
    email: string;
    password: string;
}