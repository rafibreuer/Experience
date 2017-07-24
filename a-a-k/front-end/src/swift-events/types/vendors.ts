export interface CreateVendorProfile {
    username: string,
    email: string,
    password: string,
    firstName: string;
    lastName: string,
    phoneNumber: number,
    sevice: string,
    confirmationtimer: number,
    aboutService: string,
    tempToken: string,
    isVerified: Boolean
}

export interface VendorProfile extends CreateVendorProfile {
    id: number,
}

export type ServiceType = "Hall" | "Florist" | "Musician" | "Photographer";

export interface ServiceTypeForm {
    serviceTypeArray: [string];
     selectedServiceType:string;
}