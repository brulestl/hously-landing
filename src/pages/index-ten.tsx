import map from '../assets/images/map.svg'
import { Link } from 'react-router-dom'

import property1 from '../assets/images/property/1.jpg'
import property2 from '../assets/images/property/2.jpg'
import property3 from '../assets/images/property/3.jpg'

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { FiArrowRight, FiCalendar, FiClock, FiFacebook, FiHexagon, FiInstagram, FiLinkedin } from 'react-icons/fi'

import About from '../component/About'
import Categories from '../component/categories'
import ClientTwo from '../component/Client-two'
import Footer from '../component/Footer'
import GetInTuch from '../component/Get-in-tuch'
import Navbar from '../component/Navbar'
import Partner from '../component/partner'
import { aboutData, teamdata, blogList } from '../component/Properties/data'
import Property from '../component/Properties/property'
import Switcher from '../component/Switcher'

let images = [property1,property2,property3]

export default function IndexTen() {

    const settings = {
        container: '.tiny-single',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        nav: false,
        speed: 800,
        gutter: 0,
      };
  return (
    <>
     <Navbar/> 

    <section className="relative py-24">
        <div className="absolute inset-0 opacity-40 dark:opacity-[0.03] bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:`url(${map})`}}></div>
        <div className="container relative mt-10">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-4">
                    <div className="md:text-start text-center">
                        <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl">Let's Find a Home That's Perfect For You!</h1>

                        <div className="mt-4">
                            <Link to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md md:mt-20">Learn More <i className="mdi mdi-arrow-right ms-1 align-middle"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-5">
                    <div className="rounded-full shadow-lg dark:shadow-gray-800 relative overflow-hidden border-8 border-white dark:border-slate-900">
                        <div className="grid grid-cols-1 relative">
                            <div className="tiny-single">
                                <TinySlider settings={settings}>
                                    {images.map((item,index)=>{
                                        return(
                                            <div className="tiny-slide" key={index}>
                                                <img src={item} className="object-cover w-full lg:h-[600px] md:h-96 h-[500px]" alt=""/>
                                            </div>
                                        )
                                    })}
                                </TinySlider>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="md:text-end text-center">
                        <p className="text-slate-400 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                        <div className="mt-4">
                            <ul className="list-none relative md:mt-20">
                                <li className="inline-block relative"><Link to="#"><img src={client1} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-4"><Link to="#"><img src={client2} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-4"><Link to="#"><img src={client3} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-4"><Link to="#"><img src={client4} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-4"><Link to="#"><img src={client5} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Partner/>
    </section>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We Do?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    
                    {aboutData.map((item,index)=>{
                    return(
                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center" key={index}>
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <FiHexagon className="size-32 fill-green-600/5 mx-auto"/>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <img src={item.image} className="size-12" alt=""/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link to="" className="text-xl font-medium hover:text-green-600">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>

                                <div className="mt-4">
                                    <Link to="" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">Read More <FiArrowRight className="ms-1"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>

            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Listing Categories</h3>

                    <p className="text-slate-400 max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <Categories/>
            </div>

            <Property/>

            <ClientTwo/>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamdata.map((item, index) =>{
                        return(
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                        <img src={item.image} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm !rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiFacebook className="size-4" /></Link></li>
                                            <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm !rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiInstagram className="size-4" /></Link></li>
                                            <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm !rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiLinkedin  className="size-4" /></Link></li>
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

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs & News</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {blogList.slice(0,3).map((item,index)=>{
                        return(
                            <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-700 transition-all duration-500" key={index}>
                                <div className="relative overflow-hidden">
                                    <img src={item.image} className="" alt=""/>
                                    <div className="absolute end-4 top-4">
                                        <span className="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">{item.type}</span>
                                    </div>
                                </div>

                                <div className="relative p-6">
                                    <div className="">
                                        <div className="flex justify-between mb-4">
                                            <span className="text-slate-400 text-sm inline-flex"><FiCalendar className="uil uil-calendar-alt text-slate-900 dark:text-white me-2"/>{item.date}</span>
                                            <span className="text-slate-400 text-sm inline-flex ms-3"><FiClock className="uil uil-clock text-slate-900 dark:text-white me-2"/>5 min read</span>
                                        </div>

                                        <Link to="/blog-detail" className="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out">{item.title}</Link>
                                        
                                        <div className="mt-3">
                                            <Link to="/blog-detail" className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <FiArrowRight className="uil uil-arrow-right"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>

            <GetInTuch/>
        </section>

        <Footer/>
        <Switcher/>

        
    </>
  )
}
