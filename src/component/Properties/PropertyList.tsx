import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Property, getProperties } from '../../services/api';

export default function PropertyList() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            const data = await getProperties();
            setProperties(data);
            setLoading(false);
        };

        fetchProperties();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
                <div key={property.id} className="rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                    <div className="relative overflow-hidden rounded-md">
                        <img 
                            src={property.image_url || '/placeholder.jpg'} 
                            alt={property.title}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">{property.title}</h3>
                        
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="flex items-center">
                                <i className="mdi mdi-arrow-expand-all text-green-600 me-2"></i>
                                <span>{property.square_feet} sq ft</span>
                            </div>
                            <div className="flex items-center">
                                <i className="mdi mdi-bed text-green-600 me-2"></i>
                                <span>{property.beds} Beds</span>
                            </div>
                            <div className="flex items-center">
                                <i className="mdi mdi-shower text-green-600 me-2"></i>
                                <span>{property.baths} Baths</span>
                            </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between items-center">
                            <h4 className="text-xl font-semibold text-green-600">
                                ${property.price.toLocaleString()}
                            </h4>
                            <Link 
                                to={`/property-detail/${property.id}`}
                                className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
} 