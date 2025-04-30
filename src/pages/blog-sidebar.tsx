import { Link } from "react-router-dom";

import Poperty3Image from "../assets/images/property/3.jpg";
import Poperty5Image from "../assets/images/property/5.jpg";
import Poperty6Image from "../assets/images/property/6.jpg";


import { AiOutlineClockCircle } from "react-icons/ai";
import { FiFacebook, FiGithub, FiGitlab, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { LuArrowRight, LuCalendarDays, LuSearch } from "react-icons/lu";

import Navbar from "../component/Navbar";
import { blogList } from "../component/Properties/data";
import Switcher from "../component/Switcher";
import Footer from "../component/Footer";

export default function BlogSidebar() {


    return (
        <>
            <Navbar navClass="navbar-white" />
            {/* <!-- Start Hero --> */}
            <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Blogs & News</h3>
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

            {/* <!-- Start --> */}

            <section className="relative md:py-24 py-16" >
                <div className="container">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:order-1 order-2">

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]" >
                                {blogList.map((item, index) => (
                                    <div key={index} className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-700 transition-all duration-500">
                                        <div className="relative overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute end-4 top-4">
                                                <span className="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">{item.type}</span>
                                            </div>
                                        </div>

                                        <div className="relative p-6">
                                            <div className="">
                                                <div className="flex justify-between mb-4">
                                                    <span className="text-slate-400 text-sm flex"><LuCalendarDays className="text-slate-900 dark:text-white me-2"/>{item.date}</span>
                                                    <span className="text-slate-400 text-sm ms-3 flex"><AiOutlineClockCircle className="text-slate-900 dark:text-white me-2"/>5 min read</span>
                                                </div>

                                                <Link to={`/blog-detail/${item.id}`} className="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out">{item.title}</Link>

                                                <div className="mt-3">
                                                    <Link to={`/blog-detail/${item.id}`} className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <LuArrowRight className="ms-1 text-xs"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="lg:col-span-4 md:order-2 order-1">
                            <div className="sticky top-20">
                                <form>
                                    <div>
                                        <label htmlFor="searchname" className="font-medium text-lg">Search Properties</label>
                                        <div className="relative mt-2">
                                            <LuSearch className="text-lg absolute top-[8px] start-3"/>
                                            <input name="search" id="searchname" type="text" className="form-input border !border-gray-200 dark:!border-gray-800 !ps-10" placeholder="Search" />
                                        </div>
                                    </div>
                                </form>

                                <h5 className="font-medium text-lg mt-[30px]">Recent post</h5>
                                <div className="flex items-center mt-4">
                                    <img src={Poperty6Image} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#" className="font-medium hover:text-green-600">10 Things You About Real Estate</Link>
                                        <p className="text-sm text-slate-400">2nd March 2023</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={Poperty3Image} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#" className="font-medium hover:text-green-600">Why We Love Real Estate</Link>
                                        <p className="text-sm text-slate-400">2nd March 2023</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={Poperty5Image} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#" className="font-medium hover:text-green-600">110 Quick Tips About Real Estate</Link>
                                        <p className="text-sm text-slate-400">2nd March 2023</p>
                                    </div>
                                </div>

                                <h5 className="font-medium text-lg mt-[30px]">Social sites</h5>
                                <ul className="list-none mt-4">
                                    <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiFacebook  className="size-4" /> </Link></li>
                                    <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiInstagram  className="size-4" /> </Link></li>
                                    <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiTwitter  className="size-4" /></Link></li>
                                    <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiLinkedin  className="size-4" /></Link></li>
                                    <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiGithub  className="size-4" /> </Link></li>
                                    <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiYoutube  className="size-4" /></Link></li>
                                    <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiGitlab  className="size-4" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
            <Footer />

        </>
    );

}

