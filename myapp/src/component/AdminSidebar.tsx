import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



export default function AdminSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
      };
    
      return (
        <div className="flex ">
            <button className="text-white focus:outline-none md:hidden " onClick={toggleSidebar}>
                         <FontAwesomeIcon icon={faBars} size="lg" />
                         </button>
                <div className={`h-screen w-64 fixed top-0  ${!isOpen ? "translate-x-0" : "translate-x-full"} transition-transform bg-cc text-white `}>
                    <div className="space-y-3 ">
                        <div className="flex items-center justify-between mx-2">
                            <a href="/"><img src="/logo.svg" className='w-20 mr-4 mb-4' /></a>
                        <button className="text-white focus:outline-none md:hidden" onClick={toggleSidebar}>
                         <FontAwesomeIcon icon={faBars} size="lg" />
                         </button>
                        </div>
                        
                        {/* {!isOpen && ( */}
                        <div className={`flex-1 ${!isOpen ?  "":"" }  `}>
                            
                            <ul className="pt-2 pb-4 space-y-1 text-sm flex flex-col ">
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        
                                        <span>الرئيسية</span>
                                    </a>
                                    <hr></hr>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        
                                        <span>طلبات السلف</span>
                                    </a>
                                    <hr></hr>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        
                                        <span>الفواتير</span>
                                    </a>
                                    <hr></hr>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        
                                        <span>حسابات المستخدمين</span>
                                    </a>
                                    <hr></hr>
                                </li>
                                
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        
                                        <span>تسجيل الخروج</span>
                                    </a>
                                    <hr></hr>
                                </li>
                            </ul>
                        </div>
                        {/* )} */}
                    </div>
                </div>
                
            </div>
      )
}
