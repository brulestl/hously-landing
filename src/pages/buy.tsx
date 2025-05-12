import BackgroundImage from "../assets/images/bg/01.jpg";
import { useState, useEffect } from 'react';
import { getProperties } from '../services/api';

import { FiSearch } from "react-icons/fi";
import BuyTab from "../component/Buy-tab";
import Feature from "../component/Feature";
import Footer from "../component/Footer";
import GetInTuch from "../component/Get-in-tuch";
import Navbar from "../component/Navbar";
import Property from "../component/Properties/property";
import Switcher from "../component/Switcher";

// Define a type that matches the expected structure for the Property component
interface PropertyData {
  id: number;
  image: string;
  name: string;
  square: number;
  beds: number;
  baths: number;
  price: number;
  detail: string[];
  rating: number;
}

export default function Buy() {
    const [properties, setProperties] = useState<PropertyData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const response = await getProperties();
                const mappedProperties = response.map(p => ({
                    id: p.id,
                    image: p.image_url || '/assets/images/default-property.jpg',
                    name: p.title,
                    square: p.square_feet,
                    beds: p.beds,
                    baths: p.baths,
                    price: p.price,
                    detail: [],
                    rating: 0 // Default rating value
                }));
                setProperties(mappedProperties);
            } catch (e) {
                setError('Failed to load properties');
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    return (
        <>
            <Navbar navClass="navbar-white" />
            {/* <!-- Start Hero --> */}
            <section
                style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Pronađite Svoj San</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:pb-24 pb-16">
                <div className="container relative -mt-[25px]">
                    <div className="grid grid-cols-1">
                        <div className="subcribe-form z-1">
                            <form className="relative max-w-2xl mx-auto">
                                <FiSearch className="size-5 absolute top-[47%] -translate-y-1/2 start-4"></FiSearch>
                                <input type="name" id="search_name" name="name" className="rounded-md bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700 !ps-12" placeholder="Grad, Adresa, Poštanski broj :" />
                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Pretraži</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* End Hero  */}
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                <Property items={properties} loading={loading} error={error} />
                <Feature />
                <BuyTab />
                <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
        </>
    );

}
