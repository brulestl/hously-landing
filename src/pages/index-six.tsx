import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Select from 'react-select';
import { TypeAnimation } from 'react-type-animation';

import { LuSearch } from "react-icons/lu";
import { RxHome } from "react-icons/rx";
import { AiOutlineDollarCircle } from "react-icons/ai";

import AboutTwo from "../component/about-two";
import Categories from "../component/categories";
import Client from "../component/Client";
import Footer from "../component/Footer";
import GetInTuch from "../component/Get-in-tuch";
import Navbar from "../component/Navbar";
import PropertyTwo from "../component/Property-two";
import Switcher from "../component/Switcher";

export default function IndexSix() {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    useEffect(() => {
        const onChange = () => setLang(i18n.language);
        i18n.on('languageChanged', onChange);
        return () => i18n.off('languageChanged', onChange);
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

    const maxPrice = [
        { value: '500', label: '500' },
        { value: '1000', label: '1000' },
        { value: '2000', label: '2000' },
        { value: '3000', label: '3000' },
        { value: '4000', label: '4000' },
        { value: '5000', label: '5000' },
        { value: '6000', label: '6000' },
    ];

    return (
        <>
            <Navbar navClass="navbar-white" />

            {/* Hero Start */}
            <section className="relative table w-full py-36 md:py-44 lg:py-56 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container relative z-3">
                    <div className="grid md:grid-cols-12 mt-10">
                        <div className="lg:col-span-8 md:col-span-6">
                            <TransitionGroup>
                                <CSSTransition key={lang} timeout={200} classNames="fade">
                                    <h1 className="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6">
                                        {t('hero.find')}<br />
                                        <TypeAnimation
                                            key={i18n.language}
                                            sequence={[
                                                t('hero.animation.home'),
                                                1000,
                                                t('hero.animation.villa'),
                                                1000,
                                                t('hero.animation.office'),
                                                1000,
                                            ]}
                                            wrapper="span"
                                            speed={40}
                                            repeat={Infinity}
                                            cursor={false}
                                            className="text-4xl lg:text-6xl font-semibold inline-block"
                                        /> {t('hero.for_you')}
                                    </h1>
                                </CSSTransition>
                            </TransitionGroup>
                            <p className="text-white/70 text-xl max-w-xl">{t('hero.tagline')}</p>

                            <div className="mt-8">
                                <Link to="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                                    {t('hero.learn_more')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero End */}

            {/* Search Form and Other Sections */}
            <section className="relative md:pb-24 pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative -mt-32">
                            <div className="grid grid-cols-1">
                                <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md shadow-gray-200 dark:shadow-gray-700">
                                    <form className="registration-form text-dark text-start">
                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
                                            <div>
                                                <label className="form-label text-slate-900 dark:text-white font-medium">
                                                    {t('form.search_label')}
                                                </label>
                                                <div className="filter-search-form relative filter-border mt-2">
                                                    <LuSearch className="icons" />
                                                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" placeholder={t('form.search_placeholder')} />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="form-label text-slate-900 dark:text-white font-medium">
                                                    {t('form.select_categories_label')}
                                                </label>
                                                <div className="filter-search-form relative filter-border mt-2">
                                                    <RxHome className="icons" />
                                                    <Select
                                                        className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0"
                                                        options={Houses}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="form-label text-slate-900 dark:text-white font-medium">
                                                    {t('form.min_price_label')}
                                                </label>
                                                <div className="filter-search-form relative filter-border mt-2">
                                                    <AiOutlineDollarCircle className="icons" />
                                                    <Select
                                                        className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0"
                                                        options={minPrice}
                                                    />
                                                </div>
                                            </div>

                                            <div className="md:mt-8">
                                                <input type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-[60px] rounded lg:rounded-none" value={t('form.search_button')} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:pt-24 pt-16">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className="mb-4 md:text-3xl text-2xl font-semibold">
                            {t('categories.title')}
                        </h3>
                        <p className="text-slate-400 max-w-xl">
                            {t('categories.subtitle')}
                        </p>
                    </div>

                    <Categories />
                </div>
            </section>

            <Client mt={true} />
            <GetInTuch />
            <Footer />
            <Switcher />
        </>
    );
}
