import axios from 'axios';

// Get the API URL directly from Vite environment variables
const API_URL = import.meta.env.VITE_API_URL || 'https://hously-backend-production.up.railway.app/api';

// Log the API URL being used
console.log("Using API URL:", API_URL);

// Check if the API_URL is defined
if (!API_URL) {
  console.error("VITE_API_URL is not defined in your environment variables.");
  // Optionally, you could throw an error or provide a default fallback,
  // but logging an error is often sufficient during development.
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- Request Interceptor --- 
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Use the specific key 'accessToken'
    if (token) {
        // Ensure headers object exists (axios >= v1.0)
        if (!config.headers) {
            config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Interceptor: Added Bearer token to request headers.');
    } else {
        console.log('Interceptor: No accessToken found in localStorage.');
    }
    console.log(`Interceptor: Requesting ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('Interceptor Request Error:', error);
    return Promise.reject(error);
  }
);

// --- Response Interceptor (Keep existing 401 handler) ---
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Interceptor Response Error:', error.response?.status, error.response?.data);
    if (error.response?.status === 401) {
      console.log('Interceptor: Received 401 Unauthorized. Clearing token and redirecting to login...');
      localStorage.removeItem('accessToken'); // Clear the potentially invalid token
      // Redirect only if not already on the login page to avoid loops
      if (window.location.pathname !== '/login') {
           window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;

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
        const response = await api.get<Property[]>('/properties');
        return response.data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

export const getPropertyById = async (id: number): Promise<Property | null> => {
    try {
        const response = await api.get<Property>(`/properties/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching property:', error);
        return null;
    }
}; 