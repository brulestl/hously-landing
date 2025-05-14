export type PropertyStatus = 'active' | 'inactive' | 'draft';
export type PropertyType = 'apartment' | 'house' | 'commercial';
export type ListingType = 'sale' | 'rent';
export type FurnishingType = 'unfurnished' | 'furnished' | 'semi-furnished';
export type PetsPolicy = 'allowed' | 'not-allowed' | 'case-by-case';
export type BusinessType = 'retail' | 'office' | 'industrial' | 'restaurant' | 'other';
export type ZoningType = 'residential' | 'commercial' | 'mixed' | 'industrial';

export interface NearbyLandmarks {
  education: boolean;
  healthcare: boolean;
  transport: boolean;
  shopping: boolean;
  parks: boolean;
}

export interface PropertyImage {
  image_url?: string;
  url?: string;
}

export interface PropertyData {
  // identifiers
  uid: string;
  owner_id: string;
  created_at: string;
  updated_at: string;

  // enums & required text
  listingType: ListingType;
  propertyType: PropertyType;
  title: string;
  description: string;
  address: string;
  city: string;
  neighborhood: string;

  // required numerics
  price_eur: number;
  beds: number;
  baths: number;
  square_m2: number;

  // optional numerics
  floor?: number;
  rooms?: number;
  garden_m2?: number;
  garage_spaces?: number;

  // optional text
  business_type?: string;
  zoning?: string;

  // booleans & enums
  furnishing: FurnishingType;
  pets: PetsPolicy;
  status: PropertyStatus;
  featured: boolean;
  recommended: boolean;
  luxury: boolean;

  // arrays
  equipment: string[];
  buildingFeatures: string[];

  // JSONB
  nearby_landmarks: {
    education: string;
    healthcare: string;
    transport: string;
    shopping: string;
    parks: string;
  };

  // images
  images: PropertyImage[];
}

export interface FormData {
  uid: string;
  city: string;
  address: string;
  neighborhood: string;
  title: string;
  nearbyLandmarks: {
    education: string[];
    healthcare: string[];
    transport: string[];
    shopping: string[];
    parks: string[];
  };
  description: string;
  square_feet: string;
  beds: string;
  baths: string;
  price: string;
  propertyType: PropertyType;
  listingType: ListingType;
  featured: boolean;
  recommended: boolean;
  luxury: boolean;
  furnishing: FurnishingType;
  equipment: string[];
  buildingFeatures: string[];
  pets: PetsPolicy;
  parking: string[];
  status: PropertyStatus;
  floor?: string;
  rooms?: string;
  gardenArea?: string;
  garageSpaces?: string;
  businessType?: BusinessType;
  zoning?: ZoningType;
  image_url: string[];
}

export interface UIProperty {
  id: number;
  name: string;
  address: string;
  city: string;
  square: number;
  beds: number;
  baths: number;
  price: number;
  image: string;
  type: PropertyType;
  listingType: ListingType;
  status: PropertyStatus;
  detail: string[];
  rating: number;
  title: string;
} 