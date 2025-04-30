import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { counterData } from './Properties/data';

export default function Cta() {
  const { t } = useTranslation();

  return (
        <section className="relative py-24 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div className="lg:col-start-2 lg:col-span-10">
                        <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                            {counterData.map((item, index) => (
                                <div className="counter-box text-center" key={index}>
                                    <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                                        <CountUp className="counter-value" end={item.target} />+
                                    </h1>
                                    <h5 className="counter-head text-white text-lg font-medium">
                                        {t(`counter.${item.title.toLowerCase().replace(/\s+/g, '_')}`)}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
