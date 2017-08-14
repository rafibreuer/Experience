export interface Simcha {
    userId: number;
    state: string;
    zip: string;
    preferredDate: string;
    name: string;
}

export interface UpdateSimcha extends Simcha {
    id: number;
}
