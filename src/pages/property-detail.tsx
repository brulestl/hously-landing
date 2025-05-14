// @ts-nocheck
import { SetStateAction, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Image1 from "../assets/images/property/single/1.jpg";
import Image2 from "../assets/images/property/single/2.jpg";
import Image3 from "../assets/images/property/single/3.jpg";
import Image4 from "../assets/images/property/single/4.jpg";
import Image5 from "../assets/images/property/single/5.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import { LiaBathSolid, LiaCompressArrowsAltSolid } from "react-icons/lia";
import { BiBed } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { properties } from "../component/Properties/data";
import Switcher from "../component/Switcher";
import withRouter from "../component/withrouter";
import FloorPlanWrapper from "../component/Properties/FloorPlanWrapper";
import { getImageUrl } from '../services/firebaseUtils';

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
];

function PropertyDetail(props: { params: { id: string; }; }) {
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const { t } = useTranslation();
    const [imageUrl, setImageUrl] = useState('');

    const slides = images.map((image) => ({ src: image }));

    const property = properties.find((user: { id: number; }) => user.id === parseInt(props.params.id));

    useEffect(() => {
        const fetchImage = async () => {
            if (property) {
                const url = await getImageUrl(property.imagePath);
                setImageUrl(url);
            }
        };
        fetchImage();
    }, [property]);

    const handleCLick = (index: SetStateAction<number>) => {
        setActiveIndex(index)
        setOpen(true);
    }

    return (
        <>
            <Navbar />
            {/* <!-- Hero Start --> */}
            <section className="relative md:pb-24 pb-16 mt-20">
                <div className="container-fluid">
                    <div className="md:flex mt-4">
                        <div className="lg:w-1/2 md:w-1/2 p-1">
                            <div className="group relative overflow-hidden">
                                <img src={imageUrl || '/placeholder.jpg'} alt={property?.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <Link to="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white !rounded-full lightbox"><AiOutlineCamera className="text-lg"/></Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2">
                            <div className="flex">
                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden">
                                        <img src={Image2} alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Link to="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white !rounded-full lightbox"><AiOutlineCamera className="text-lg"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden">
                                        <img src={Image3} alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Link to="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white !rounded-full lightbox"><AiOutlineCamera className="text-lg"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden">
                                        <img src={Image4} alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Link to="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white !rounded-full lightbox"><AiOutlineCamera className="text-lg"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden">
                                        <img src={Image5} alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Link to="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white !rounded-full lightbox"><AiOutlineCamera className="text-lg"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floor Plan Drawer */}
                    <FloorPlanWrapper />
                </div>

                <div className="container md:mt-24 mt-16">
                    <div className="md:flex">
                        <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                            <h4 className="text-2xl font-medium">{property?.name}</h4>

                            <ul className="py-6 flex items-center list-none">
                                <li className="flex items-center lg:me-6 me-4">
                                    <LiaCompressArrowsAltSolid className="lg:text-3xl text-2xl me-2 text-green-600"/>
                                    <span className="lg:text-xl">{property?.square}{t('property_detail.square')}</span>
                                </li>

                                <li className="flex items-center lg:me-6 me-4">
                                    <BiBed className="lg:text-3xl text-2xl me-2 text-green-600"/>
                                    <span className="lg:text-xl">{property?.beds} {t('property_detail.beds')}</span>
                                </li>

                                <li className="flex items-center">
                                    <LiaBathSolid className="lg:text-3xl text-2xl me-2 text-green-600"/>
                                    <span className="lg:text-xl">{property?.baths} {t('property_detail.baths')}</span>
                                </li>
                            </ul>

                            <p className="text-slate-400">{t('property_detail.description.part1')}</p>
                            <p className="text-slate-400 mt-4">{t('property_detail.description.part2')}</p>
                            <p className="text-slate-400 mt-4">{t('property_detail.description.part3')}</p>

                            <div className="w-full leading-[0] border-0 mt-6">
                                <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                            <div className="sticky top-20">
                                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow-sm shadow-gray-200 dark:shadow-gray-700">
                                    <div className="p-6">
                                        <h5 className="text-2xl font-medium">{t('property_detail.price')}:</h5>

                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-xl font-medium">€ {property?.price}</span>

                                            <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">{t('property_detail.for_sale')}</span>
                                        </div>

                                        <ul className="list-none mt-4">
                                            <li className="flex justify-between items-center">
                                                <span className="text-slate-400 text-sm">{t('property_detail.days_on_hously')}</span>
                                                <span className="font-medium text-sm">124 {t('property_detail.days_on_hously')}</span>
                                            </li>

                                            <li className="flex justify-between items-center mt-2">
                                                <span className="text-slate-400 text-sm">{t('property_detail.price_per_sqft')}</span>
                                                <span className="font-medium text-sm">€ 186</span>
                                            </li>

                                            <li className="flex justify-between items-center mt-2">
                                                <span className="text-slate-400 text-sm">{t('property_detail.monthly_payment')}</span>
                                                <span className="font-medium text-sm">€ 1497/{t('property_detail.monthly')}</span>
                                            </li>
                                        </ul>

                                        <div className="mt-6">
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-slate-400 mb-2">{t('property_detail.select_date')}</label>
                                                <input
                                                    type="date"
                                                    value={selectedDate}
                                                    onChange={(e) => setSelectedDate(e.target.value)}
                                                    className="w-full p-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800"
                                                    min={new Date().toISOString().split('T')[0]}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-slate-400 mb-2">{t('property_detail.select_time')}</label>
                                                <input
                                                    type="time"
                                                    value={selectedTime}
                                                    onChange={(e) => setSelectedTime(e.target.value)}
                                                    className="w-full p-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800"
                                                />
                                            </div>
                                            <button 
                                                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                                                onClick={() => {
                                                    if (selectedDate && selectedTime) {
                                                        // Handle appointment scheduling
                                                        console.log('Scheduling appointment for:', selectedDate, selectedTime);
                                                    }
                                                }}
                                            >
                                                {t('property_detail.schedule_appointment')}
                                            </button>
                                            
                                            <div className="mt-6">
                                                <img 
                                                    src="/Trust_Badges.png" 
                                                    alt="Trust Badges" 
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 text-center">
                                    <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">{t('property_detail.have_question')}</h3>

                                    <div className="mt-6">
                                        <Link to="/contact" className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"><BsTelephone className="align-middle me-2"/> {t('property_detail.contact_us')}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Lightbox open={isOpen} close={() => isOpen(false)} slides={slides} index={photoIndex}/>

            <Footer />
            <Switcher />
        </>
    );

}

export default withRouter(PropertyDetail);
