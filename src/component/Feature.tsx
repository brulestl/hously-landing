import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { featureData, review } from "./Properties/data";
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

interface Feature{
    image: string;
    title: string;
    desc: string;
    className?: string;
}

interface Review{
    id: string;
    profile: string;
    name: string;
    designation: string;
    description: string;
}

export default function Feature() {
    const { t } = useTranslation();

    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },
            767: {
                items: 2
            },
            320: {
                items: 1
            },
        },
    };

    return (
        <>
            <div className="container lg:mt-24 mt-16 py-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    {/* Text half */}
                    <div className="w-full">
                        <div className="lg:me-4">
                            <h3 className="mb-8 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                                {t('feature.headline', 'Kupite ili iznajmite stan bez provizije')}
                            </h3>
                            <p className="text-slate-400 max-w-xl mb-12">
                                {t('feature.text', "Nemate dovoljno vremena da pronađete dobro i prijatno mjesto za život? I baš kada pomislite da ste pronašli stan iz snova u stvarnom životu, on ne izgleda ni upola lijepo kao na slikama. Znamo kako se osjećate, i zato postoji City Expert! Vrijeme je da zaboravite te neprijatne trenutke! Nema više iznenađenja jer ćete uz našu inovativnu prezentaciju nekretnina imati potpuni uvid u sve što je važno.")}
                            </p>
                            
                            <div className="mt-8 flex gap-6">
                                <Link to="/properties-for-sale" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3">
                                    {t('feature.buttons.sale', 'Kupi nekretninu')}
                                </Link>
                                <Link to="/properties-for-rent" className="btn bg-white hover:bg-gray-50 border border-green-600 hover:border-green-700 text-green-600 hover:text-green-700 rounded-md px-6 py-3">
                                    {t('feature.buttons.rent', 'Iznajmi nekretninu')}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image half */}
                    <div className="w-full h-full">
                        <div className="relative w-full h-full">
                            <img
                                src="https://img.freepik.com/free-photo/young-family-moving-into-their-new-house_1303-23745.jpg?t=st=1745685430~exp=1745689030~hmac=8679bb2bb6354d10f7885a1582d1c594d0a33769a616c382d6ad8489b97221f5&w=996"
                                alt="Young family moving into their new house"
                                className="rounded-lg shadow-md object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-24 gap-[30px] pt-12">
                    {featureData.map((item:Feature,index:number) =>{
                        const translationKey = index === 0 ? 'transparency' : index === 1 ? 'direct_communication' : 'free_of_charge';
                        return(
                            <div className={`group relative lg:px-12 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center ${item.className || ''}`} key={index}>
                                <div className="relative overflow-hidden text-transparent -m-1">
                                    <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center p-[14.4px]">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-[8.5px] h-[8.5px] object-contain"
                                        />
                                    </div>
                                </div>
        
                                <div className="mt-8">
                                    <h5 className="text-xl font-medium mb-4">{t(`feature.${translationKey}.title`, item.title)}</h5>
                                    <p className="text-slate-400 mt-4">{t(`feature.${translationKey}.text`, item.desc)}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Reviews Section */}
                <div className="mt-64 py-24">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Šta kažu naši klijenti</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Moderna platforma za kupovinu, prodaju ili iznajmljivanje nekretnina bez skrivenih 'administrativnih' naknada.</p>
                    </div>

                    <div className="relative w-full">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                                {review.map((el:Review, index:number) => (
                                    <div className="tiny-slide" key={index}>
                                        <div className="text-center mx-3 p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-500">
                                            <p className="text-lg text-slate-400 italic"> " {el.description} " </p>

                                            <div className="text-center mt-5">
                                                <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                </ul>

                                                <img src={el.profile} className="size-14 rounded-full shadow-md shadow-gray-200 dark:shadow-gray-700 mx-auto" alt="" />
                                                <h6 className="mt-2 font-semibold">{el.name}</h6>
                                                <span className="text-slate-400 text-sm">{el.designation}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
