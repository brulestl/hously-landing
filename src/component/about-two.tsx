import { useTranslation } from 'react-i18next';

export default function AboutTwo() {
    const { t } = useTranslation();

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="w-full h-full">
                        <div className="relative w-full h-full">
                            <img
                                src="https://img.freepik.com/free-photo/cute-young-woman-reading-book-sofa_7502-7285.jpg?t=st=1745678927~exp=1745682527~hmac=3946609eab765c766c76b2154ce405e8a04265fc5a6a20dd81973aff9608a3d0&w=996"
                                alt="Young woman reading book"
                                className="rounded-lg shadow-md object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
                                {t('about.headline')}
                            </h4>
                            <p className="text-slate-400 max-w-xl">
                                {t('about.subheadline')}
                            </p>
                            <ul className="list-disc pl-5 mt-4 text-slate-400">
                                <li>{t('about.bullets.transparent')}</li>
                                <li>{t('about.bullets.no_hidden')}</li>
                                <li>{t('about.bullets.no_waste_time')}</li>
                            </ul>
                            <div className="mt-4">
                                <a href="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">
                                    {t('about.learn_more')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
