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
    detail: string[];
}

export default function Pagination({ items, gridClass }:{ items:Array<data>, gridClass:string }) {

    return (
        <>
            <div className={gridClass}>
                {items.map((item, index) => (
                    <Link to={`/property-detail/${item.id}`} key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl dark:hover:shadow-xl shadow-gray-200 dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div className="relative">
                            <img src={item.image} alt="" />

                            <div className="absolute top-4 end-4">
                                <Link to="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow-sm shadow-gray-200  dark:shadow-gray-700 !rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="pb-6">
                                <span className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</span>
                            </div>

                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                <li className="flex items-center me-4">
                                    <LiaCompressArrowsAltSolid className="text-2xl me-2 text-green-600"/>
                                    <span>{item.square}m²</span>
                                </li>

                                <li className="flex items-center me-4">
                                    <BiBed className="text-2xl me-2 text-green-600"/>
                                    <span>{item.beds}</span>
                                </li>

                                <li className="flex items-center">
                                    <LiaBathSolid className="text-2xl me-2 text-green-600"/>
                                    <span>{item.baths}</span>
                                </li>
                            </ul>

                            <div className="pt-6">
                                <span className="text-slate-400">Price</span>
                                <p className="text-lg font-medium">€{item.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav>
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                    <FiChevronLeft className="text-[20px]"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                            </li>
                            <li>
                                <Link to="#" aria-current="page" className="z-10 size-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-xs shadow-gray-200 dark:shadow-gray-700">3</Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
                            </li>
                            <li>
                                <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                    <FiChevronRight className="text-[20px]"/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

