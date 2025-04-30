import { Link } from "react-router-dom";
import LogoLight from "../assets/images/logo-light.png";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsPencil } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiDribbble, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiShoppingCart, FiTwitter } from "react-icons/fi";
import { BiLogoBehance } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="relative py-16">
                            <div className="relative w-full">
                                <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                        <div className="md:text-start text-center z-1">
                                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
                                                {t('newsletter.title')}
                                            </h3>
                                            <p className="text-slate-400 max-w-xl mx-auto">
                                                {t('newsletter.description')}
                                            </p>
                                        </div>

                                        <div className="subcribe-form z-1">
                                            <form className="relative max-w-lg md:ms-auto">
                                                <input 
                                                    type="email" 
                                                    id="subcribe" 
                                                    name="email" 
                                                    className="rounded-full bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700" 
                                                    placeholder={t('newsletter.placeholder')} 
                                                />
                                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white !rounded-full">
                                                    {t('newsletter.button')}
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="absolute -top-5 -start-5">
                                        <HiOutlineEnvelope  className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"/>
                                    </div>

                                    <div className="absolute -bottom-5 -end-5">
                                        <BsPencil className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"/>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                                    <div className="lg:col-span-4 md:col-span-12">
                                        <Link to="#" className="text-[22px] focus:outline-none">
                                            <img src={LogoLight} alt="" />
                                        </Link>
                                        <p className="mt-6 text-gray-300">{t('footer.platform_description')}</p>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">{t('footer.company')}</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link to="/aboutus" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.about_us')}</Link></li>
                                            <li className="mt-[10px]"><Link to="/features" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.services')}</Link></li>
                                            <li className="mt-[10px]"><Link to="/pricing" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.pricing')}</Link></li>
                                            <li className="mt-[10px]"><Link to="/blog" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.blog')}</Link></li>
                                            <li className="mt-[10px]"><Link to="/auth-login" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.login')}</Link></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">{t('footer.useful_links')}</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link to="/terms" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.terms')}</Link></li>
                                            <li className="mt-[10px]"><Link to="/privacy" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.privacy')}</Link></li>
                                            <li className="mt-[10px]"><Link to="/listing-one" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.listing')}</Link></li>
                                            <li className="mt-[10px]"><Link to="/contact" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> {t('footer.contact')}</Link></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">{t('footer.company')}</h5>
                                        <p className="mt-6 text-gray-300">{t('footer.platform_description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-2 items-center gap-6">
                            <div className="md:text-start text-center">
                                <p className="mb-0 text-gray-300">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                            </div>

                            <ul className="list-none md:text-end text-center">
                                <li className="inline ms-1"><Link to="https://1.envato.market/hously-react" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiShoppingCart className="size-4"/></Link></li>
                                <li className="inline ms-1"><Link to="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiDribbble className="size-4"/></Link></li>
                                <li className="inline ms-1"><Link to="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><BiLogoBehance className="align-baseline"/></Link></li>
                                <li className="inline ms-1"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiLinkedin className="size-4"/></Link></li>
                                <li className="inline ms-1"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiFacebook className="size-4"/></Link></li>
                                <li className="inline ms-1"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiInstagram className="size-4"/></Link></li>
                                <li className="inline ms-1"><Link to="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiTwitter className="size-4"/></Link></li>
                                <li className="inline ms-1"><Link to="mailto:support@shreethemes.in" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiMail className="size-4"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}