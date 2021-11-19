import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import CountrySelector from "../components/Select/CountrySelector";
import GenderSelector from "../components/Select/GenderSelector";

import { AccountContext } from '../context/AccountContext';

function Index() {
    const { country, setCountry, gender, setGender, updateData } = useContext(AccountContext);
    const [open, setOpen] = useState(true);
    const toggleSidebarHandler = () => {
        setOpen(oldVal => !oldVal);
    }
    return (
        <div className="flex flex-no-wrap">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="w-72 relative flex items-center overflow-hidden" style={{
                height: "calc(100vh - 51px - 0.5rem)",
                left: open ? "0" : "-17rem",
                marginRight: open ? "0" : "-17rem",
                transition: "all 2s",
            }}>
                <div 
                    className={`${open ? "block" : "block"} border-r w-full h-full flex flex-col transition`}
                    style={{
                    }}
                >
                    <div className="">
                        <div className="px-2 py-1 w-full">
                            <label className="cursor-pointer" htmlFor="">Country</label>
                            <CountrySelector 
                                value={country}
                                changeHandler={setCountry}
                            />
                        </div>
                        <div className="px-2 py-1 w-full">
                            <label className="cursor-pointer" htmlFor="">Gender</label>
                            <GenderSelector 
                                value={gender}
                                changeHandler={setGender}
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 mt-8">
                        <button 
                            className="rounded-md shadow-sm border border-gray-300 w-full bg-red-500 hover:bg-red-300 transition mb-2"
                            onClick={updateData}
                        >Generate</button>
                    </div>
                </div>
                <div className="h-10 w-4 right-0 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler" onClick={e => toggleSidebarHandler()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <Outlet />
        </div>
    );
}

export default Index;
