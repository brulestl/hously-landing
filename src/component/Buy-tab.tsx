import React, { useState } from "react";

import Agent from "../assets/images/svg/Agent_Monochromatic.svg";
import Presentation from "../assets/images/svg/presentation_Flatline.svg";
import Session from "../assets/images/svg/session_Flatline.svg";
import Startup from "../assets/images/svg/Startup_Flatline.svg";
import Team from "../assets/images/svg/team_Flatline.svg";
import Meeting from "../assets/images/svg/Team_meeting_Two.svg";

export default function BuyTab() {
    const [activeTabIndex, setactiveTabIndex] = useState(0);

    const handleTabClick = (tabIndex: React.SetStateAction<number>) => {
        setactiveTabIndex(tabIndex)
    };


    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation">
                                    <button
                                        className={`px-4 py-2 text-base font-medium rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-green-600' : 'dark:hover:bg-slate-800 dark:hover:text-white hover:bg-gray-50 hover:text-green-600'}`}
                                        onClick={() => handleTabClick(0)}
                                        id="letter-tab" data-tabs-target="#letter" type="button" role="tab" aria-controls="letter" aria-selected="true">Pronađi povoljan stambeni kredit</button>
                                </li>
                                <li role="presentation">
                                    <button
                                        className={`px-4 py-2 text-base font-medium rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-green-600' : 'dark:hover:bg-slate-800 dark:hover:text-white hover:bg-gray-50 hover:text-green-600'}`}
                                        onClick={() => handleTabClick(1)}
                                        id="schedule-tab" data-tabs-target="#schedule" type="button" role="tab" aria-controls="schedule" aria-selected="false">Zakažite Sastanak</button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-base font-medium rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-green-600' : 'dark:hover:bg-slate-800 dark:hover:text-white hover:bg-gray-50 hover:text-green-600'}`}
                                        onClick={() => handleTabClick(2)} id="offer-tab" data-tabs-target="#offer" type="button" role="tab" aria-controls="offer" aria-selected="false">Pošaljite Ponudu</button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-base font-medium rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${activeTabIndex === 3 ? 'text-white bg-green-600' : 'dark:hover:bg-slate-800 dark:hover:text-white hover:bg-gray-50 hover:text-green-600'}`}
                                        onClick={() => handleTabClick(3)} id="inspection-tab" data-tabs-target="#inspection" type="button" role="tab" aria-controls="inspection" aria-selected="false">Inspekcija Nekretnine</button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-base font-medium rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${activeTabIndex === 4 ? 'text-white bg-green-600' : 'dark:hover:bg-slate-800 dark:hover:text-white hover:bg-gray-50 hover:text-green-600'}`}
                                        onClick={() => handleTabClick(4)} id="appraisal-tab" data-tabs-target="#appraisal" type="button" role="tab" aria-controls="appraisal" aria-selected="false">Procjena Vrijednosti</button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-base font-medium rounded-md w-full mt-3 transition-all duration-500 ease-in-out ${activeTabIndex === 5 ? 'text-white bg-green-600' : 'dark:hover:bg-slate-800 dark:hover:text-white hover:bg-gray-50 hover:text-green-600'}`}
                                        onClick={() => handleTabClick(5)} id="closing-tab" data-tabs-target="#closing" type="button" role="tab" aria-controls="closing" aria-selected="false">Završetak Kupoprodaje</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent">
                            {activeTabIndex === 0 && (
                                <div className="" id="letter" role="tabpanel" aria-labelledby="letter-tab">
                                    <img src={Agent} alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Pronađi povoljan stambeni kredit</h5>
                                        <p className="text-slate-400 mt-3">Mnogi počinju tražeći nekretnine, ali osiguravanje finansiranja je ključni prvi korak. Preskočite neizvjesnost. Naš ekosistem Premier Partnera pojednostavljuje proces odobrenja vašeg kredita, dajući vam samopouzdanje i jasnoću da brže pronađete dom iz snova.</p>
                                    </div>
                                </div>
                            )}
                            {activeTabIndex === 1 && (
                                <div id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                                    <img src={Presentation} alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Zakažite Sastanak</h5>
                                        <p className="text-slate-400 mt-3">Vaš Raspored, Vaši Uslovi. Ostvarite direktan pristup zakazivanju sastanaka sa našim partnerima. Bez suvišne komunikacije, bez posrednika. Jednostavno odaberite termin koji se uklapa u vaš život. Potpuna pogodnost na dohvat ruke.</p>
                                    </div>
                                </div>
                            )}
                            {activeTabIndex === 2 && (
                                <div id="offer" role="tabpanel" aria-labelledby="offer-tab">
                                    <img src={Session} alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Pošaljite Ponudu</h5>
                                        <p className="text-slate-400 mt-3">Zaboravite na traženje informacija. Naši prilagođeni radni tokovi i analiza napretka vas informišu na svakom koraku. Nema više nagađanja ili neodgovorenih poruka – samo jasne, pravovremene informacije koje vam daju kontrolu.</p>
                                    </div>
                                </div>
                            )}
                            {activeTabIndex === 3 && (
                                <div id="inspection" role="tabpanel" aria-labelledby="inspection-tab">
                                    <img src={Startup} alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Inspekcija Nekretnine</h5>
                                        <p className="text-slate-400 mt-3">Zaštitite Svoju Investiciju od Skrivenih Mana. Ne rizikujte kupovinu nekretnine sa skupim tajnama. Niste sigurni u njeno pravo stanje? Nudimo detaljne provjere nekretnina kako bismo otkrili sve potencijalne probleme prije nego što se obavežete. Osigurajte svoju investiciju i svoj mir. Za lakši san!</p>
                                    </div>
                                </div>
                            )}
                            {activeTabIndex === 4 && (
                                <div id="appraisal" role="tabpanel" aria-labelledby="appraisal-tab">
                                    <img src={Team} alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Procjena Vrijednosti</h5>
                                        <p className="text-slate-400 mt-3">Kupujte sa Samopouzdanjem: Da li je cijena prava? Pažljivo pratimo procjenu vrijednosti nekretnine, osiguravajući da procijenjena vrijednost opravdava vašu investiciju. Znajte da plaćate fer cijenu.</p>
                                    </div>
                                </div>
                            )}
                            {activeTabIndex === 5 && (
                                <div id="closing" role="tabpanel" aria-labelledby="closing-tab">
                                    <img src={Meeting} alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Završetak Kupoprodaje</h5>
                                        <p className="text-slate-400 mt-3">Konačno, završni paket se šalje notaru, i taj dan je došao... Pronašli ste dom svojih snova!</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
