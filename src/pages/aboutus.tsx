import { Link } from "react-router-dom";
import CountUp from 'react-countup';

import BackgroudImage from "../assets/images/bg/01.jpg";

import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import Navbar from "../component/Navbar";
import About from "../component/About";
import ClientTwo from "../component/Client-two";
import Feature from "../component/Feature";
import Footer from "../component/Footer";
import GetInTuch from "../component/Get-in-tuch";
import { counterData, teamdata } from "../component/Properties/data";
import Switcher from "../component/Switcher";

export default function Aboutus() {

    return (
        <>
            <Navbar navClass="navbar-white" />
            {/* <!-- Start Hero --> */}
            <section
                style={{ backgroundImage: `url(${BackgroudImage})` }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                 <div className="absolute inset-0 bg-slate-900/80"></div>
                 <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>
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
            {/* <!-- End Hero --> */}
            <section className="relative md:pb-24 pb-16">
                <About />
                <Feature />
            </section>
            {/* <!-- Start CTA --> */}
            <section
                style={{ backgroundImage: `url(${BackgroudImage})` }}
                className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                        <div className="lg:col-start-2 lg:col-span-10">
                            <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                                {counterData.map((item, index) =>{
                                    return(
                                        <div className="counter-box text-center" key={index}>
                                            <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">

                                                <CountUp
                                                    start={0}
                                                    className="counter-value"
                                                    end={item.target}
                                                    duration={2.75} />

                                                +</h1>
                                            <h5 className="counter-head text-white text-lg font-medium">{item.title}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End CTA --> */}

            <section className="relative md:pb-24 pb-16">
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {teamdata.map((item,index) =>{
                            return(
                                <div className="lg:col-span-3 md:col-span-6" key={index}>
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                                <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm !rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiFacebook className="size-4" /></Link></li>
                                                <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm !rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiInstagram className="size-4" /></Link></li>
                                                <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm !rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiLinkedin className="size-4" /></Link></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ClientTwo />
                <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
        </>
    );

}
