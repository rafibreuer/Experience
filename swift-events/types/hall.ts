export interface Hall {
    vendorId: number;
    name: string;
    street: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export interface UpdateHall extends Hall {
    id: number;
}
