export interface FeaturedFilters {
    recommended: boolean;
    luxury: boolean;
}

export interface FurnishingFilters {
    furnished: boolean;
    semiFurnished: boolean;
    unfurnished: boolean;
}

export interface ParkingFilters {
    garage: boolean;
    private: boolean;
    building: boolean;
    public: boolean;
}

export interface AmenitiesFilters {
    alarm: boolean;
    ac: boolean;
    tv: boolean;
    washingMachine: boolean;
    bath: boolean;
    shower: boolean;
    dishwasher: boolean;
}

export interface BuildingFilters {
    elevator: boolean;
    intercom: boolean;
    cameras: boolean;
    security: boolean;
    wheelchairAccess: boolean;
}

export interface PetsFilters {
    allowed: boolean;
    notAllowed: boolean;
}

export interface RentFiltersState {
    featured: FeaturedFilters;
    furnishing: FurnishingFilters;
    amenities: AmenitiesFilters;
    building: BuildingFilters;
    parking: ParkingFilters;
    pets: PetsFilters;
}

export interface BuyFiltersState {
    featured: FeaturedFilters;
    furnishing: FurnishingFilters;
    parking: ParkingFilters;
}

export type FilterCategory = keyof RentFiltersState | keyof BuyFiltersState;
export type FilterItem<T> = keyof T; 