import { BiBed } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { LiaBathSolid, LiaCompressArrowsAltSolid } from 'react-icons/lia';
import { Link } from "react-router-dom";

interface data{
    id: number;
    image: string;
    name: string;
    square: number;
    beds: number;
    baths: number;
    price: number;
    rating: number;
    detail: string[];
}

export default function PaginationTwo({items, gridClass }:{items:Array<data>, gridClass:string }) {
    return (
        <>
            <div className={gridClass}>
                {items.map((item, index) => (
                    <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl dark:hover:shadow-xl shadow-gray-200 dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 w-full mx-auto">
                        <div className="md:flex">
                            <div className="relative md:shrink-0">
                                <img className="h-full w-full object-cover md:w-48" src={item.image} alt="" />
                                <div className="absolute top-4 end-4">
                                    <Link to="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700 !rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                </div>
                            </div>
                            <div className="p-6 w-full">
                                <div className="md:pb-4 pb-6">
                                    <Link to={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</Link>
                                </div>

                                <ul className="md:py-4 py-6 border-y border-slate-100 dark:border-gray-800 flex items-center justify-between list-none">
                                    <li className="flex items-center me-4">
                                        <LiaCompressArrowsAltSolid className="text-2xl me-2 text-green-600"/>
                                        <span>{item.square}sqf</span>
                                    </li>

                                    <li className="flex items-center me-4">
                                        <BiBed className="text-2xl me-2 text-green-600"/>
                                        <span>{item.beds} Beds</span>
                                    </li>

                                    <li className="flex items-center">
                                        <LiaBathSolid className="text-2xl me-2 text-green-600"/>
                                        <span>{item.baths} Baths</span>
                                    </li>
                                </ul>

                                <ul className="md:pt-4 pt-6 flex justify-between items-center list-none">
                                    <li>
                                        <span className="text-slate-400">Price</span>
                                        <p className="text-lg font-medium">${item.price}</p>
                                    </li>

                                    <li>
                                        <span className="text-slate-400">Rating</span>
                                        <ul className="text-lg font-medium text-amber-400 list-none">
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav>
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                    <FiChevronLeft />
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                            </li>
                            <li>
                                <Link to="#" aria-current="page" className="z-10 size-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm shadow-gray-200 dark:shadow-gray-700">3</Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                    <FiChevronRight/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );

}
