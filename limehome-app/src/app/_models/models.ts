export interface Address {
    label: string;
    countryCode: string;
    countryName: string;
    stateCode: string;
    state: string;
    countyCode: string;
    county: string;
    city: string;
    district: string;
    street: string;
    postalCode: string;
    houseNumber: string;
}

export interface Position {
    lat: number;
    lng: number;    
}

export interface Hotel {
    title: string;
    address: Address;
    position: Position;
    distance: number;
    icon:string;
}

export interface RootObject {
    items: Hotel[];
}



