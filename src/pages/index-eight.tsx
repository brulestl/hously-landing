import { Link } from 'react-router-dom';

import BackgroundImage from "../assets/images/bg/bg2.png";

import { FiArrowRight, FiFacebook, FiHexagon, FiInstagram, FiLinkedin, FiSearch } from 'react-icons/fi';

import Categories from '../component/categories';
import Client from '../component/Client';
import Cta from '../component/cta';
import Footer from '../component/Footer';
import GetInTuch from '../component/Get-in-tuch';
import Navbar from '../component/Navbar';
import Partner from '../component/partner';
import Property from '../component/Properties/property';
import Switcher from '../component/Switcher';

import { aboutData, teamdata } from '../component/Properties/data';

export default function IndexEight() {
  return (
    <>
      <Navbar/>
      <section className="relative overflow-hidden md:h-screen pt-36 md:pb-48 pb-64 bg-green-600/10 dark:bg-green-600/20 bg-no-repeat bg-bottom bg-cover" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="container relative">
            <div className="grid grid-cols-1 items-center mt-10">
                <div className="text-center">
                    <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Explore Listings and <br/> Make Move Today</h1>
                    <p className="text-slate-400 text-xl max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                    <div className="subcribe-form z-1 max-w-2xl mx-auto mt-8">
                        <form className="relative">
                            <FiSearch className="size-5 absolute top-[47%] -translate-y-1/2 start-4"></FiSearch>
                            <input type="name" id="search_name" name="name" className="rounded-full bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700 !ps-12" placeholder="City, Address, Zip :"/>
                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white !rounded-full">Find Out</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
            <Categories/>
        </div>

        <div className="container relative lg:mt-24 mt-16">
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

        <Property/>
      </section>

      <Cta/>
      <Partner/>

      <section className="relative md:py-24 py-16">
        <Client mt={false}/>

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

        <GetInTuch/>
      </section>
      <Footer/>
      <Switcher/>
    </>

    
  )
}
