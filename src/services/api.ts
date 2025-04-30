import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this to your Railway backend URL when deployed

export interface Property {
    id: number;
    title: string;
    square_feet: number;
    beds: number;
    baths: number;
    price: number;
    image_url: string | null;
    created_at: string;
}

export const getProperties = async (): Promise<Property[]> => {
    try {
        const response = await axios.get<Property[]>(`${API_URL}/properties`);
        return response.data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

export const getPropertyById = async (id: number): Promise<Property | null> => {
    try {
        const response = await axios.get<Property>(`${API_URL}/properties/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching property:', error);
        return null;
    }
}; 