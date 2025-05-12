import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Select from 'react-select'
import { useState, useEffect } from 'react';
import { getProperties } from '../services/api';

import { LuSearch } from "react-icons/lu";
import { RxHome } from "react-icons/rx";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Navbar from "../component/Navbar";
import { properties } from "../component/Properties/data";
import Switcher from "../component/Switcher";
import Pagination from "../component/Pagination";
import BuyFilters from "../component/BuyFilters";

// Define a type that matches the expected structure for the Pagination component
interface PropertyData {
  id: number;
  image: string;
  name: string;
  square: number;
  beds: number;
  baths: number;
  price: number;
  detail: string[];
}

export default function GridMap() {
    const { t } = useTranslation();
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState<any>(null);
    const [properties, setProperties] = useState<PropertyData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const Houses = [
        { value: 'apartment', label: t('houses.apartment') },
        { value: 'offices', label: t('houses.offices') },
        { value: 'townhome', label: t('houses.townhome') },
    ];

    const minPrice = [
        { value: '500', label: '€500' },
        { value: '1000', label: '€1000' },
        { value: '2000', label: '€2000' },
        { value: '3000', label: '€3000' },
        { value: '4000', label: '€4000' },
        { value: '5000', label: '€5000' },
        { value: '6000', label: '€6000' },
    ];

    const maxPrice = [
        { value: '500', label: '€500' },
        { value: '1000', label: '€1000' },
        { value: '2000', label: '€2000' },
        { value: '3000', label: '€3000' },
        { value: '4000', label: '€4000' },
        { value: '5000', label: '€5000' },
        { value: '6000', label: '€6000' },
    ];

    const handleApplyFilters = (filters: any) => {
        setActiveFilters(filters);
        setShowFilters(false);
        // Here you can implement the filtering logic for your properties
    };

    const handleClearFilters = () => {
        setActiveFilters(null);
        setShowFilters(false);
        // Here you can implement the logic to clear all filters
    };

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
                    detail: [] // Add any additional details if needed
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
            <Navbar topnavClass="bg-white !dark:bg-slate-900" />

            <section className="relative">
                <div className="container-fluid">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2">
                        <div>
                            <div className="relative mt-12 md:p-8 py-8 px-3">
                                <div className="grid grid-cols-1">
                                    <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md shadow-gray-200 dark:shadow-gray-700">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                <div>
                                                    <label className="form-label text-slate-900 dark:text-white font-medium">{t('form.search_label')}</label>
                                                    <div className="filter-search-form relative filter-border mt-2">
                                                        <LuSearch className="icons"/>
                                                        <input name="name" type="text" className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" placeholder={t('form.search_placeholder')} />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="form-label text-slate-900 dark:text-white font-medium">{t('form.select_categories_label')}</label>                                                        
                                                    <div className="filter-search-form relative filter-border mt-2">
                                                        <RxHome className="icons"/>
                                                        <Select className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" options={Houses} />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="form-label text-slate-900 dark:text-white font-medium">{t('form.min_price_label')}</label>                                                        
                                                    <div className="filter-search-form relative filter-border mt-2">
                                                        <AiOutlineDollarCircle className="icons"/>
                                                        <Select className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" options={minPrice} />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="form-label text-slate-900 dark:text-white font-medium">{t('form.max_price_label')}</label>                                                        
                                                    <div className="filter-search-form relative mt-2">
                                                        <AiOutlineDollarCircle className="icons"/>
                                                        <Select className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" options={maxPrice} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="flex gap-2 mt-6">
                                        <input type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value={t('form.search_button')} />
                                        <button
                                            type="button"
                                            onClick={() => setShowFilters(!showFilters)}
                                            className="btn border-2 border-green-600 text-green-600 hover:bg-green-50 w-full !h-12 rounded flex items-center justify-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                            </svg>
                                            {t('filters.title')}
                                        </button>
                                    </div>

                                    {/* Filters Dropdown */}
                                    {showFilters && (
                                        <div className="mt-4">
                                            <BuyFilters
                                                onApply={handleApplyFilters}
                                                onClear={handleClearFilters}
                                            />
                                        </div>
                                    )}

                                    {loading && <div>Loading...</div>}
                                    {error && <div>{error}</div>}

                                    <Pagination items={properties} gridClass="grid lg:grid-cols-3 grid-cols-1 mt-8 gap-[30px]" />

                                </div>

                            </div>

                            <footer className="relative bg-neutral-900">
                                <div className="py-[30px] px-0">
                                    <div className="container text-center px-6">
                                        <div className="grid md:grid-cols-2 items-center gap-6">
                                            <div className="md:text-start text-center">
                                                <p className="mb-0 text-gray-300">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                                            </div>

                                            <ul className="list-none md:text-end text-center">
                                                <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiFacebook className="size-4" /></Link></li>
                                                <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiInstagram className="size-4" /></Link></li>
                                                <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiTwitter className="size-4" /></Link></li>
                                                <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiLinkedin className="size-4" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>

                        <div className="relative md:block hidden">
                            <div className="map border-0 fixed w-full leading-[0]">
                                <iframe title="grid-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0 }} className="w-full h-screen" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
        </>
    );
}

