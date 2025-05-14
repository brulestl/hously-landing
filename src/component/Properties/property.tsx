import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { LiaBathSolid, LiaCompressArrowsAltSolid } from "react-icons/lia";
import { BiBed } from "react-icons/bi";
import { getProperties } from '../../services/propertyService';

interface Property{
    id: number;
    image: string;
    name: string;
    square: number;
    beds: number;
    baths: number;
    price: number;
    rating: number;
    detail: string[];
    title: string;
    address: string;
    city: string;
}

const PropertyComponent = () => {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const data = await getProperties();
            setProperties(data);
        };
        fetchProperties();
    }, []);

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Moderna platforma za kupovinu, prodaju ili iznajmljivanje nekretnina bez skrivenih 'administrativnih' naknada.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {properties.map((property) => (
                        <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold">{property.title}</h4>
                                <p className="text-sm text-gray-600">{property.address}</p>
                                <div className="flex items-center mt-2">
                                    <LiaCompressArrowsAltSolid className="text-green-600" />
                                    <span className="ml-2 text-sm">{property.square} sqft</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <BiBed className="text-green-600" />
                                    <span className="ml-2 text-sm">{property.beds} Beds</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <LiaBathSolid className="text-green-600" />
                                    <span className="ml-2 text-sm">{property.baths} Baths</span>
                                </div>
                                <div className="mt-4">
                                    <Link to={`/property/${property.id}`} className="text-green-600 hover:underline">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PropertyComponent;

