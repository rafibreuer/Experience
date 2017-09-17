export interface UserProfile {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    tempToken: string;
    isVerified: boolean;
}


export interface Login {
    email: string;
    password: string;
}

export interface SignUp {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}