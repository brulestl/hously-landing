// @ts-nocheck
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";

import index1 from '../assets/images/demos/hero-one.png'
import index2 from '../assets/images/demos/hero-two.png'
import index3 from '../assets/images/demos/hero-three.png'
import index4 from '../assets/images/demos/hero-four.png'
import index5 from '../assets/images/demos/hero-five.png'
import index6 from '../assets/images/demos/hero-six.png'
import index7 from '../assets/images/demos/hero-seven.png'
import index8 from '../assets/images/demos/hero-eight.png'
import index9 from '../assets/images/demos/hero-nine.png'
import index10 from '../assets/images/demos/hero-ten.png'

import { FiUser } from "react-icons/fi";

export default function Navbar(props) {
    const { navClass, topnavClass, tagLine } = props;
    const { i18n } = useTranslation(); // Initialize i18n

    let [ toggle, setToggle] = useState(false);
    let [manu , setManu] = useState('');
    let [subManu , setSubManu] = useState('');
    let [ scroll, setScroll ] = useState(false)

    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
        let current = location.pathname
        setManu(current)
        setSubManu(current)

        let windowScroll =()=>{
            setScroll(window.scrollY > 50);
        }
        window.addEventListener('scroll', windowScroll )

        return()=>{
            window.removeEventListener('scroll', windowScroll )
        }
    },[location.pathname])


    // render() {
    // const toggleClass = this.state.isOpenMenu ? 'hidden' : 'block';


    // Function to toggle language
    const changeLanguage = () => {
      const currentLanguage = i18n.language;
      const nextLanguage = currentLanguage === 'me' ? 'en' : 'me';
      i18n.changeLanguage(nextLanguage);
    };

    return (
        <React.Fragment>
            {tagLine === true ?
                <div className="tagline bg-slate-900">
                    <div className="container">
                        <div className="flex justify-between items-center py-2">
                            <div className="text-white">Tagline goes here</div>
                            <div className="hidden lg:block">
                                <Link to="#" className="text-white hover:text-gray-300 px-4">Link 1</Link>
                                <Link to="#" className="text-white hover:text-gray-300 px-4">Link 2</Link>
                                <Link to="#" className="text-white hover:text-gray-300 px-4">Link 3</Link>
                            </div>
                        </div>
                    </div>
                </div> : ''}
            <nav id="topnav" className={`defaultscroll is-sticky ${scroll ? 'nav-sticky' : ''} ${tagLine ? 'tagline-height' : ''} ${topnavClass ? 'nav-sticky' : ''}
            `} >
                {/* Added flex justify-between items-center */}
                <div className={`flex justify-between items-center ${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container'}`}>

                    {/* <!-- Logo container--> */}
                    {navClass === '' || navClass === undefined ?
                        <Link className="logo" to="/">
                            <img src={LogoDark} className="inline-block dark:hidden" alt="" />
                            <img src={LogoLight} className="hidden dark:inline-block" alt="" />
                        </Link> :
                        <Link className="logo" to="#">
                            <span className="inline-block dark:hidden">
                                <img src={LogoDark} className="l-dark" height="24" alt="" />
                                <img src={LogoLight} className="l-light" height="24" alt="" />
                            </span>
                            <img src={LogoLight} height="24" className="hidden dark:inline-block" alt="" />
                        </Link>
                    }
                    {/* <!-- End Logo container--> */}

                    {/* <!-- Start Mobile Toggle --> */}
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link to="#" className={`${ toggle ? 'open' : '' } navbar-toggle`} id="isToggle" onClick={() =>setToggle(!toggle)} >
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- End Mobile Toggle --> */}

                    {/* Main Navigation Menu */}
                    <div id="navigation" style={{ display: toggle ? 'block' : 'none' }}>
                        {/* <!-- Navigation Menu--> */}
                        <ul className={`navigation-menu ${navClass === '' || navClass === undefined ? '' : 'nav-light'} ${topnavClass !== '' && topnavClass !== undefined ? '!justify-center' : '!justify-end'} items-center`}>
                            <li className={`has-submenu parent-menu-item ${["/" ,"/index", "/index-two", "/index-three", "/index-four", "/index-five", "/index-six", "/index-seven","/index-eight","/index-nine","/index-ten"].includes(manu) ? 'active' : ''}`}>
                                <Link to="#" onClick={(e)=>{setSubManu(subManu === "/index-item" ? "" : "/index-item")}}>Home</Link><span className="menu-arrow"></span>
                                <ul className={`submenu megamenu ${["/index", "/index-two", "/index-three", "/index-four", "/index-five", "/index-six","/index-seven","/index-item","/index-eight","/index-nine","/index-ten"].includes(subManu) ? 'open' : ''}`}>
                                    <li>
                                        <ul>
                                            <li className={manu ===  "/" ? 'active' : '' }>
                                                <Link to="/" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index1} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero One</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={manu ===  "/index-two" ? 'active' : '' }>
                                                <Link to="/index-two" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index2} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Two</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li className={manu ===  "/index-three" ? 'active' : '' }>
                                                <Link to="/index-three" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index3} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Three</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={manu ===  "/index-four" ? 'active' : '' }>
                                                <Link to="/index-four" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index4} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Four</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li className={manu ===  "/index-five" ? 'active' : '' }>
                                                <Link to="/index-five" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index5} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Five</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={manu ===  "/index-six" ? 'active' : '' }>
                                                <Link to="/index-six" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index6} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Six</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li className={manu ===  "/index-seven" ? 'active' : '' }>
                                                <Link to="/index-seven" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index7} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Seven</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={manu ===  "/index-eight" ? 'active' : '' }>
                                                <Link to="/index-eight" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index8} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Eight</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li className={manu ===  "/index-nine" ? 'active' : '' }>
                                                <Link to="/index-nine" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index9} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Nine</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={manu ===  "/index-ten" ? 'active' : '' }>
                                                <Link to="/index-ten" className="sub-menu-item">
                                                    <div className="lg:text-center">
                                                        <span className="none lg:block"><img src={index10} className="img-fluid rounded shadow-md" alt=""/></span>
                                                        <span className="lg:mt-2 block">Hero Ten </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className={manu ===  "/buy" ? 'active' : '' }><NavLink to="/buy" activeclassname="active" className="sub-menu-item">Buy</NavLink></li>

                            <li className={manu ===  "/sell" ? 'active' : '' }><Link to="/sell" className="sub-menu-item">Sell</Link></li>

                            <li className={`has-submenu parent-parent-menu-item ${["/grid", "/grid-sidebar", "/grid-map", "/list", "/list-sidebar", "/list-map", "/property-detail/1","/property-detail-two"].includes(manu) ? 'active' : ''}`}>
                                <Link to="#" onClick={()=>{setSubManu(subManu === "/list-item" ? "" : "/list-item")}}>Listing</Link><span className="menu-arrow"></span>
                                <ul className={`submenu ${["/grid", "/grid-sidebar", "/grid-map", "/list", "/list-sidebar", "/list-map", "/property-detail/1", "/list-item", "/grid-item", "/list-view-item", "/property-item","/property-detail-two"].includes(subManu) ? 'open' : ''}`}>
                                    <li className={`has-submenu parent-menu-item ${["/grid", "/grid-sidebar", "/grid-map"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={() =>{setSubManu(subManu === "/grid-item" ? "" : "/grid-item")}}> Grid View </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/grid", "/grid-sidebar", "/grid-map", "/grid-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu ===  "/grid" ? 'active' : '' }><Link to="/grid" className="sub-menu-item">Grid Listing</Link></li>
                                            <li className={manu ===  "/grid-sidebar" ? 'active' : '' }><Link to="/grid-sidebar" className="sub-menu-item">Grid Sidebar </Link></li>
                                            <li className={manu ===  "/grid-map" ? 'active' : '' }><Link to="/grid-map" className="sub-menu-item">Grid With Map</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`has-submenu parent-menu-item ${["/list", "/list-sidebar", "/list-map"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={() =>{setSubManu(subManu === "/list-view-item" ? "" : "/list-view-item")}}> List View </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/list", "/list-sidebar", "/list-map", "/list-view-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu ===  "/list" ? 'active' : '' }><Link to="/list" className="sub-menu-item">List Listing</Link></li>
                                            <li className={manu ===  "/list-sidebar" ? 'active' : '' }><Link to="/list-sidebar" className="sub-menu-item">List Sidebar </Link></li>
                                            <li className={manu ===  "/list-map" ? 'active' : '' }><Link to="/list-map" className="sub-menu-item">List With Map</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`has-submenu parent-menu-item ${["/property-detail/1", "/property-detail-two"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={() =>{setSubManu(subManu === "/property-item" ? "" : "/property-item")}}> Property Detail </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/property-detail/1", "/property-item","/property-detail-two"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu ===  "/property-detail/1" ? 'active' : '' }><Link to="/property-detail/1" className="sub-menu-item">Property Detail</Link></li>
                                            <li className={manu ===  "/property-detail-two" ? 'active' : '' }><Link to="/property-detail-two" className="sub-menu-item">Property Detail Two </Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className={`has-submenu parent-parent-menu-item ${["/aboutus", "/features", "/pricing", "/faqs", "/auth-login", "/auth-signup", "/auth-reset-password", "/terms", "/privacy", "/blogs", "/blog-sidebar", "/blog-detail", "/comingsoon", "/maintenance", "/404","/agetns-item", "/agents","/agent-profile","/agencies-item", "/agencies","/agency-profile"].includes(manu) ? 'active' : ''}`}>
                                <Link to="#" onClick={()=>{setSubManu(subManu === "/page-item" ? '' : "/page-item")}}>Pages</Link><span className="menu-arrow"></span>
                                <ul className={`submenu ${["/aboutus", "/features", "/pricing", "/faqs", "/auth-login", "/auth-signup", "/auth-reset-password", "/terms", "/privacy", "/blogs", "/blog-sidebar", "/blog-detail", "/comingsoon", "/maintenance", "/404","/page-item","/auth-item","/term-item","/blog-item", "/special-item","/agetns-item", "/agents","/agent-profile","/agencies-item", "/agencies","/agency-profile"].includes(subManu) ? 'open' : ''}`}>
                                    <li className={manu === "/aboutus" ? "active" : ''}><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                                    <li className={manu === "/features" ? "active" : ''}><Link to="/features" className="sub-menu-item">Featues</Link></li>
                                    <li className={manu === "/pricing" ? "active" : ''}><Link to="/pricing" className="sub-menu-item">Pricing</Link></li>
                                    <li className={manu === "/faqs" ? "active" : ''}><Link to="/faqs" className="sub-menu-item">Faqs</Link></li>

                                    <li className={`has-submenu parent-menu-item ${["/agetns-item", "/agents","/agent-profile"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>{setSubManu(subManu === "/agetns-item" ? '' : "/agetns-item")}}> Agents</Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/agetns-item", "/agents","/agent-profile"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/agents" ? "active" : ''}><Link to="/agents" className="sub-menu-item">Agents</Link></li>
                                            <li className={manu === "/agent-profile" ? "active" : ''}><Link to="/agent-profile" className="sub-menu-item">Agent Profile</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`has-submenu parent-menu-item ${["/agencies-item", "/agencies","/agency-profile"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>{setSubManu(subManu === "/agencies-item" ? '' : "/agencies-item")}}> Agencies </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/agencies-item", "/agencies","/agency-profile"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/agencies" ? "active" : ''}><Link to="/agencies" className="sub-menu-item">Agencies</Link></li>
                                            <li className={manu === "/agency-profile" ? "active" : ''}><Link to="/agency-profile" className="sub-menu-item">Agency Profile</Link></li>
                                        </ul>
                                    </li>

                                    <li className={`has-submenu parent-menu-item ${["/auth-login", "/auth-signup", "/auth-reset-password"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>{setSubManu(subManu === "/auth-item" ? '' : "/auth-item")}}> Auth Pages </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/auth-login", "/auth-signup", "/auth-reset-password","/auth-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/auth-login" ? "active" : ''}><Link to="/auth-login" className="sub-menu-item">Login</Link></li>
                                            <li className={manu === "/auth-signup" ? "active" : ''}><Link to="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                            <li className={manu === "/auth-reset-password" ? "active" : ''}><Link to="/auth-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`has-submenu parent-menu-item ${["/terms", "/privacy"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>{setSubManu(subManu === "/term-item" ? '' : "/term-item")}}> Utility </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/terms", "/privacy","/term-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/terms" ? "active" : ''}><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                            <li className={manu === "/privacy" ? "active" : ''}><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`has-submenu parent-menu-item ${["/blogs", "/blog-sidebar", "/blog-detail"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>{setSubManu(subManu === "/blog-item" ? '' : "/blog-item")}}> Blog </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/blogs", "/blog-sidebar", "/blog-detail", "/blog-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/blogs" ? "active" : ''}><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                            <li className={manu === "/blog-sidebar" ? "active" : ''}><Link to="/blog-sidebar" className="sub-menu-item"> Blog Sidebar</Link></li>
                                            <li className={manu === "/blog-detail" ? "active" : ''}><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`has-submenu parent-menu-item ${["/comingsoon", "/maintenance", "/404"].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>{setSubManu(subManu === "/special-item" ? '' : "/special-item")}}> Special </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/comingsoon", "/maintenance", "/404", "/special-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/comingsoon" ? "active" : ''}><Link to="/comingsoon" className="sub-menu-item">Comingsoon</Link></li>
                                            <li className={manu === "/maintenance" ? "active" : ''}><Link to="/maintenance" className="sub-menu-item">Maintenance</Link></li>
                                            <li className={manu === "/404" ? "active" : ''}><Link to="/404" className="sub-menu-item">404! Error</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className={manu === "/contact" ? "active" : ''}><Link to="/contact" className="sub-menu-item">Contact</Link></li>

                            {/* ----- MODIFICATION START: Language Switcher Moved Here ----- */}
                            <li className="items-center ms-4">
                                <button
                                    onClick={changeLanguage}
                                    className={`text-2xl bg-transparent hover:bg-transparent border-0 outline-none shadow-none flex items-center justify-center p-0 language-transition`}
                                    style={{ verticalAlign: 'middle' }}
                                    aria-label={i18n.language === 'me' ? "Switch to English" : "Promijeni na Crnogorski"}
                                >
                                    {i18n.language === 'me' ? '🇬🇧' : '🇲🇪'}
                                </button>
                            </li>
                             {/* ----- MODIFICATION END ----- */}

                        </ul>
                        {/* <!-- End Navigation Menu--> */}
                    </div>

                    {/* Login Button / User Area Start */}
                    {/* Note: Language switcher was removed from here */}
                    <ul className="buy-button list-none mb-0 flex items-center gap-2">

                        {/* User Icon */}
                        <li className="inline-flex items-center">
                            <Link to="/auth-login" className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 !text-white !rounded-full">
                                <FiUser className="size-4 stroke-[3]" />
                            </Link>
                        </li>

                        {/* ----- Language Switcher REMOVED from here ----- */}

                        {/* Signup Button */}
                        <li className="inline-flex items-center sm:inline ps-1 mb-0 hidden">
                            <Link to="/auth-signup" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 !text-white !rounded-full">
                                Signup
                            </Link>
                        </li>

                    </ul>
                    {/* Login Button End */}

                </div> {/* End of flex container */}
            </nav>
            {/* End Navbar  */}
        </React.Fragment>
    );

}