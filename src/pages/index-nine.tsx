import { useState, useEffect } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import bg from '../assets/images/bg/bg3.png';
import { LuSearch } from "react-icons/lu";
import { RxHome } from "react-icons/rx";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

import About from "../component/About";
import Categories from "../component/categories";
import Client from "../component/Client";
import Cta from "../component/cta";
import Feature from "../component/Feature";
import Footer from "../component/Footer";
import GetInTuch from "../component/Get-in-tuch";
import Navbar from "../component/Navbar";
import { properties, teamdata } from "../component/Properties/data";
import Switcher from "../component/Switcher";
import Tagline from "../component/tagline";

export default function IndexNine() {
    const { t, i18n } = useTranslation();
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const handleLanguageChange = () => {
            setIsActive(false);
            // Only fade in the new content
            setTimeout(() => {
                setIsActive(true);
            }, 50); // Small delay to ensure state change
        };

        i18n.on('languageChanged', handleLanguageChange);
        return () => i18n.off('languageChanged', handleLanguageChange);
    }, [i18n]);

    const Houses = [
        { value: 'apartment', label: t('houses.apartment') },
        { value: 'offices', label: t('houses.offices') },
        { value: 'townhome', label: t('houses.townhome') },
    ];

    const minPrice = [
        { value: '500', label: '500' },
        { value: '1000', label: '1000' },
        { value: '2000', label: '2000' },
        { value: '3000', label: '3000' },
        { value: '4000', label: '4000' },
        { value: '5000', label: '5000' },
        { value: '6000', label: '6000' },
    ];

    const [activeTabIndex, setactiveTabIndex] = useState<number>(0);

    const handleTabClick = (tabIndex:number) => {
        setactiveTabIndex(tabIndex);
    };

    return (
        <>
            <Tagline/>
            <Navbar tagLine={true}/>

            <section className="relative overflow-hidden md:h-screen flex items-center md:py-0 py-36 bg-cyan-100 dark:bg-cyan-500/20 bg-no-repeat bg-top bg-cover" style={{backgroundImage:`url(${bg})`}}>
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center mt-10">
                        <div className="md:text-start text-center">
                            <h1 className={`font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 language-transition ${isActive ? 'fade-in' : ''}`}>
                                {t('index_nine.headline')}
                            </h1>
                            <p className={`text-xl max-w-xl language-transition ${isActive ? 'fade-in' : ''}`}>
                                {t('index_nine.subheadline')}
                            </p>

                            <div className="relative flex mt-8">
                                <div className="lg:w-5/6 w-full">
                                    <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b border-gray-200 dark:border-gray-800" id="myTab" role="tablist">
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-green-600' : 'hover:text-green-600'}`}>{t('index_nine.tabs.buy')}</button>
                                        </li>
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => handleTabClick(1)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-green-600' : 'hover:text-green-600'}`}>{t('index_nine.tabs.sell')}</button>
                                        </li>
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => handleTabClick(2)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-green-600' : 'hover:text-green-600'}`}>{t('index_nine.tabs.rent')}</button>
                                        </li>
                                    </ul>

                                    <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md shadow-gray-200 dark:shadow-gray-700">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div>
                                                        <label className={`form-label text-slate-900 dark:text-white font-medium language-transition ${isActive ? 'fade-in' : ''}`}>{t('index_nine.form.search_label')}</label>
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <LuSearch className="icons"/>
                                                            <input name="name" type="text" className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" placeholder={t('index_nine.form.search_placeholder')} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className={`form-label text-slate-900 dark:text-white font-medium language-transition ${isActive ? 'fade-in' : ''}`}>{t('index_nine.form.select_categories_label')}</label>
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <RxHome className="icons"/>
                                                            <Select className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" options={Houses} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className={`form-label text-slate-900 dark:text-white font-medium language-transition ${isActive ? 'fade-in' : ''}`}>{t('index_nine.form.min_price_label')}</label>
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <AiOutlineDollarCircle className="icons"/>
                                                            <Select className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" options={minPrice} />
                                                        </div>
                                                    </div>
                                                    <div className="md:mt-8">
                                                        <input type="submit" className={`btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-[60px] rounded lg:rounded-none language-transition ${isActive ? 'fade-in' : ''}`} value={t('index_nine.form.search_button')} />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative lg:pb-24 pb-16">
                <About/>
                <Feature/>
            </section>

            <Cta/>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className={`mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold language-transition ${isActive ? 'fade-in' : ''}`}>
                            {t('index_nine.sections.listing_categories')}
                        </h3>
                        <p className={`text-slate-400 max-w-xl language-transition ${isActive ? 'fade-in' : ''}`}>
                            {t('index_nine.subheadline')}
                        </p>
                    </div>
                    <Categories/>
                </div>
            </section>

            <Footer/>
            <Switcher/>
        </>
    )
}