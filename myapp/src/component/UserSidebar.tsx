import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function UserSidebar() {
    const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
            <div className={`h-screen w-64 fixed top-0  ${isOpen ? "translate-x-0" : ""} transition-transform bg-cc text-white`}>
                <div className="space-y-3 ">
                    <div className="flex items-center justify-between mx-2">
                        <h2 className="text-xl font-bold">تسليف</h2>
                    <button className="text-white focus:outline-none md:hidden" onClick={toggleSidebar}>
                     <FontAwesomeIcon icon={faBars} size="lg" />
                     </button>
                    </div>
                    
                    {!isOpen && (
                    <div className="flex-1 ">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span>الرئيسية</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span>طلبات السلف</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span>طلباتي</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span>الفواتير</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span>الملف الشخصي</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span>تسجيل الخروج</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    )}
                </div>
            </div>
            
        </div>
  )
}
