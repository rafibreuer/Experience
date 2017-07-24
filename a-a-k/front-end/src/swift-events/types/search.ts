export interface CreateSearch {
    simchaId: number,
    vendorId: number
}

export interface Search extends CreateSearch {
    id: number;
}
