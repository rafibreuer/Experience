export interface Package {
    vendorId: string,
    description: string,
    name: string
}

export interface UpdatePackage extends Package {
    id: number
}