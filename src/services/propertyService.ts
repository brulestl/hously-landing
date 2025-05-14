import api from './api';
import type { ApiProperty, UIProperty, PropertyData, FormData } from '../types/property';
import axios from 'axios';
import { db } from '../config/firebase-config';
import { collection, addDoc, updateDoc, doc, arrayUnion } from 'firebase/firestore';

/**
 * Convert API property to UI property format
 */
const mapApiToUIProperty = (property: ApiProperty): UIProperty => ({
  id: property.uid,
  name: property.title,
  address: property.address,
  square: property.square_m2,
  beds: property.beds,
  baths: property.baths,
  price: property.price_eur,
  image: property.images?.[0]?.image_url ?? '/assets/images/default-property.jpg',
  type: property.property_type as any,
  listingType: property.listing_type as any,
  status: property.status as any,
  detail: [], // Empty array for now, can be populated with additional details if needed
});

/**
 * Fetch all active properties
 */
export const getProperties = async (): Promise<UIProperty[]> => {
  try {
    const response = await api.get<ApiProperty[]>('/properties', {
      params: { status: 'active' }
    });
    return response.data.map(mapApiToUIProperty);
  } catch (err) {
    console.error('Error fetching properties:', err);
    return [];
  }
};

/**
 * Fetch a single property by its UID
 */
export const getPropertyById = async (
  uid: string
): Promise<UIProperty | null> => {
  try {
    const response = await api.get<ApiProperty>(`/properties/${uid}`);
    return mapApiToUIProperty(response.data);
  } catch (err) {
    console.error('Error fetching property:', err);
    return null;
  }
};

/**
 * Search properties with filters
 */
export const searchProperties = async (filters: {
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  beds?: number;
  baths?: number;
}): Promise<UIProperty[]> => {
  try {
    const response = await api.get<ApiProperty[]>('/properties/search', {
      params: filters
    });
    return response.data.map(mapApiToUIProperty);
  } catch (err) {
    console.error('Error searching properties:', err);
    return [];
  }
};

interface ApiError {
  message: string;
}

// Define a custom AxiosError type compatible with common usage
type CustomAxiosError<T = any> = Error & {
  response?: {
    data: T;
    status: number;
    headers: any;
  };
  isAxiosError?: boolean; // Optional property to identify Axios-like errors
};

// Define the payload type to match your backend exactly
export interface PropertyPayload {
  title: string;
  description: string;
  priceEur: number;
  price: number;
  address: string;
  city: string;
  neighborhood: string;
  beds: number;
  baths: number;
  squareM2: number;
  square_m2: number;
  propertyType: string;
  listingType: string;
  furnishing: string;
  equipment: string[];
  buildingFeatures: string[];
  nearbyLandmarks: {
    education: boolean;
    healthcare: boolean;
    transport: boolean;
    shopping: boolean;
    parks: boolean;
  };
  featured: boolean;
  recommended: boolean;
  luxury: boolean;
  status: string;
  pets: string;
  imageUrls: string[];
}

// POST /properties (Railway)
export const createProperty = (data: PropertyPayload) =>
  api.post('/properties', data);

export const getPropertyByUid = async (uid: string): Promise<PropertyData> => {
  const response = await api.get<PropertyData>(`/properties/uid/${uid}`);
  return response.data;
};

const mapToPayload = (data: PropertyData): PropertyPayload => ({
  title: data.title || '',
  description: data.description || '',
  priceEur: data.price_eur || 0,
  price: data.price_eur || 0,
  address: data.address || '',
  city: data.city || '',
  neighborhood: data.neighborhood || '',
  beds: data.beds || 0,
  baths: data.baths || 0,
  squareM2: data.square_m2 || 0,
  square_m2: data.square_m2 || 0,
  propertyType: data.propertyType || 'apartment',
  listingType: data.listingType || 'sale',
  furnishing: data.furnishing || 'unfurnished',
  equipment: data.equipment || [],
  buildingFeatures: data.buildingFeatures || [],
  nearbyLandmarks: (() => {
    const lm = data.nearby_landmarks || {
      education: '', healthcare: '', transport: '', shopping: '', parks: ''
    };
    return {
      education: Boolean(lm.education),
      healthcare: Boolean(lm.healthcare),
      transport: Boolean(lm.transport),
      shopping: Boolean(lm.shopping),
      parks: Boolean(lm.parks)
    };
  })(),
  featured: data.featured || false,
  recommended: data.recommended || false,
  luxury: data.luxury || false,
  status: data.status || 'active',
  pets: data.pets || 'not-allowed',
  imageUrls: (data.images || []).map((img: PropertyImage) => img.image_url || img.url).filter((url: string | undefined): url is string => !!url)
});

export const updateProperty = async (
  uid: string,
  data: PropertyData
): Promise<PropertyData> => {
  const payload = mapToPayload(data);
  const response = await api.put<PropertyData>(`/properties/${uid}`, payload);
  return response.data;
};

// Add the deepSanitize helper function
export const deepSanitize = (value: any): any => {
  if (value === undefined || value === '' || (typeof value === 'number' && isNaN(value)))
    return undefined;

  if (typeof value === 'string') {
    // convert numeric strings to numbers
    const num = Number(value);
    return !isNaN(num) && value.trim() !== '' ? num : value.trim();
  }

  if (Array.isArray(value)) {
    const cleaned = value.map(deepSanitize).filter(v => v !== undefined);
    return cleaned.length ? cleaned : undefined;
  }

  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value)
      .map(([k, v]) => [k, deepSanitize(v)] as const)
      .filter(([, v]) => v !== undefined);
    return entries.length ? Object.fromEntries(entries) : undefined;
  }

  return value; // boolean, Timestamp, etc.
};

// Replace sanitize uses with deepSanitize
export const createPropertySkeleton = async (data: FormData): Promise<string> => {
  console.log('Creating property with data:', data); // Log the payload
  const docRef = await addDoc(collection(db, 'properties'), deepSanitize(data)); // data already clean
  await updateDoc(docRef, { uid: docRef.id });
  return docRef.id;
};

export const appendImages = (uid: string, urls: string[]) =>
  updateDoc(doc(db, "properties", uid), { imageUrls: arrayUnion(...urls) }); 