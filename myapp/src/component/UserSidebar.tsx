// import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo2.svg'

import { useState } from "react";



export default function UserSidebar() {
    const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("isOrder");
    window.location.href = "/login";
  };

  return (
    <div className="">
        
        <button className="text-blact focus:outline-none md:hidden m-5 " onClick={toggleSidebar}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#fff"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

                     </button>
            <div className={`h-screen w-64 fixed top-0  ${!isOpen ? "translate-x-0" : "translate-x-full"} transition-transform  text-black bg-sidebar`}>
                <div className="space-y-3 ">
                    <div className="flex items-center justify-between mt-5 p-2">
                        <a href="/home"><img src={logo} className=' w-32' /></a>
                    <button className=" focus:outline-none md:hidden" onClick={toggleSidebar}>
                    <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
                  
                     </button>
                    </div>
                    
                    {/* {!isOpen && ( */}
                    <div className={`flex-1 ${!isOpen ?  "":"" }  `}>
                        
                        <ul className="pt-2 pb-4 space-y-1 flex flex-col  text-lg gap-5 mt-10">
                            <li className=" border-b-white border-b">
                                <a
                                    href="/Home"
                                    className=" flex gap-2 p-2 space-x-3 rounded-md text-white"
                                >
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="25" height="25"  viewBox="0 0 32 32">
<path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"></path>
</svg>
                                    <span>الرئيسية</span>
                                    
  
                                   

                                    
                                    
                                </a>
                               
                            </li>
                            {/* <li className="border-b-white border-b " >
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md gap-3"
                                >
                                        

<svg id='Create_Order_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


<g transform="matrix(0.91 0 0 0.91 12 12)" >
<path transform=" translate(-14, -13)" d="M 6 2 C 4.897 2 4 2.897 4 4 L 4 20 C 4 21.103 4.897 22 6 22 L 12.683594 22 C 12.387594 21.378 12.181078 20.707 12.080078 20 L 12.074219 20 C 12.026219 19.673 12 19.34 12 19 C 12 18.305 12.105922 17.634 12.294922 17 L 11.818359 17 C 11.244359 16.91 9.4121094 16.479469 9.4121094 13.855469 L 11.302734 13.855469 C 11.302734 15.563469 12.182406 15.492188 12.316406 15.492188 C 12.463406 15.492188 13.185547 15.465609 13.185547 14.349609 C 13.185547 12.120609 9.7265625 13.108578 9.7265625 9.7675781 C 9.7265625 7.4775781 11.623891 7.121125 11.962891 7.078125 L 11.962891 5.6503906 L 12.970703 5.6503906 L 12.970703 7.1054688 C 13.291703 7.1664687 15.087891 7.576125 15.087891 10.203125 L 13.197266 10.203125 C 13.197266 8.830125 12.614141 8.6152344 12.369141 8.6152344 C 12.235141 8.6152344 11.615234 8.6503437 11.615234 9.7773438 C 11.616234 11.512344 14.248188 11.242375 14.867188 13.359375 C 15.771187 12.696375 16.841 12.250031 18 12.082031 L 18 12.085938 C 18.034 12.080937 18.064656 12.078219 18.097656 12.074219 C 18.393656 12.035219 18.693 12 19 12 C 19.326 12 19.643031 12.029266 19.957031 12.072266 L 19.957031 3.7167969 C 19.980031 3.3877969 19.863141 3.0518594 19.619141 2.7558594 C 19.317141 2.3908594 18.733 2 18 2 L 6 2 z M 19 14 C 16.239 14 14 16.239 14 19 C 14 21.761 16.239 24 19 24 C 21.761 24 24 21.761 24 19 C 24 16.239 21.761 14 19 14 z M 18 16 L 20 16 L 20 18 L 22 18 L 22 20 L 20 20 L 20 22 L 18 22 L 18 20 L 16 20 L 16 18 L 18 18 L 18 16 z" stroke-linecap="round" />
</g>
</svg>
                                
                                    <span>طلبات السلف</span>
                                </a>
                                
                            </li> */}
                            <li className="border-b-white border-b ">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md gap-3 text-white"
                                >
                                    <svg id='Purchase_Order_24' width='24' fill="#fff" height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
                                            <g transform="matrix(0.43 0 0 0.43 12 12)" >
                                            <path  transform=" translate(-25, -25)" d="M 6 2 L 6 48 L 7 48 L 44 48 L 44 2 L 6 2 z M 8 4 L 42 4 L 42 46 L 8 46 L 8 4 z M 13 11 L 13 13 L 37 13 L 37 11 L 13 11 z M 13 25 L 13 27 L 17 27 L 17 25 L 13 25 z M 20 25 L 20 27 L 37 27 L 37 25 L 20 25 z M 13 31 L 13 33 L 17 33 L 17 31 L 13 31 z M 20 31 L 20 33 L 37 33 L 37 31 L 20 31 z M 13 37 L 13 39 L 17 39 L 17 37 L 13 37 z M 20 37 L 20 39 L 37 39 L 37 37 L 20 37 z" stroke-linecap="round" />
                                            </g>
                                            </svg>
                                    
                                    <span>طلباتي</span>
                                </a>
                             
                            </li>
                            <li className="border-b-white border-b">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md gap-3 text-white"
                                >
                                    
                                    <svg id='Receipt_Terminal_24' width='24' fill="#fff" height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' ><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


                                        <g transform="matrix(0.45 0 0 0.45 12 12)" >
                                        <path  transform=" translate(-25, -25.01)" d="M 12.962891 3 C 12.425172879853163 3.020019719241071 11.999681256851533 3.461909427423648 12 3.9999999999999996 L 12 26 L 10 26 C 7.8045455 26 6 27.804545 6 30 L 6 46 C 5.994899710454515 46.36063591657757 6.184375296169332 46.696081364571604 6.495872849714331 46.877887721486516 C 6.80737040325933 47.05969407840143 7.192629596740671 47.05969407840143 7.50412715028567 46.877887721486516 C 7.815624703830668 46.696081364571604 8.005100289545485 46.36063591657757 8 46 L 8 30 C 8 28.895455 8.8954545 28 10 28 L 12 28 L 12 30 C 10.895 30 10 30.895 10 32 C 10 33.105 10.895 34 12 34 L 38 34 C 39.105 34 40 33.105 40 32 C 40 30.895 39.105 30 38 30 L 38 28 L 40 28 C 41.104545 28 42 28.895455 42 30 L 42 46 C 41.99489971045452 46.36063591657757 42.184375296169335 46.696081364571604 42.49587284971433 46.877887721486516 C 42.80737040325933 47.05969407840143 43.19262959674067 47.05969407840143 43.50412715028567 46.877887721486516 C 43.81562470383067 46.696081364571604 44.00510028954548 46.36063591657757 44 46 L 44 30 C 44 27.804545 42.195455 26 40 26 L 38 26 L 38 4 C 37.999989053776204 3.653411719572435 37.82053322510945 3.331537339960429 37.525714148992876 3.1493145405984246 C 37.2308950728763 2.96709174123642 36.8627479764722 2.950501801444015 36.552734 3.1054688000000006 L 35 3.8828125 L 33.447266 3.1054688 C 33.16570615822729 2.9646858561433675 32.83429384177271 2.964685856143367 32.552734 3.1054688000000006 L 31 3.8828125 L 29.447266 3.1054688 C 29.165706158227287 2.9646858561433675 28.834293841772713 2.964685856143367 28.552734 3.1054688000000006 L 27 3.8828125 L 25.447266 3.1054688 C 25.165706158227287 2.9646858561433675 24.834293841772713 2.964685856143367 24.552734 3.1054688000000006 L 23 3.8828125 L 21.447266 3.1054688 C 21.165706158227287 2.9646858561433675 20.834293841772713 2.964685856143367 20.552734 3.1054688000000006 L 19 3.8828125 L 17.447266 3.1054688 C 17.165706158227287 2.9646858561433675 16.834293841772713 2.964685856143367 16.552734 3.1054688000000006 L 15 3.8828125 L 13.447266 3.1054688 C 13.297217307406891 3.0302201066822505 13.13064191400641 2.9939496409243636 12.962891 3 z M 17 5.1171875 L 18.552734 5.8945312 C 18.834293841772713 6.035314143856633 19.165706158227287 6.035314143856633 19.447266 5.8945312 L 21 5.1171875 L 22.552734 5.8945312 C 22.834293841772713 6.035314143856633 23.165706158227287 6.035314143856633 23.447266 5.8945312 L 25 5.1171875 L 26.552734 5.8945312 C 26.834293841772713 6.035314143856633 27.165706158227287 6.035314143856633 27.447266 5.8945312 L 29 5.1171875 L 30.552734 5.8945312 C 30.834293841772713 6.035314143856633 31.165706158227287 6.035314143856633 31.447266 5.8945312 L 33 5.1171875 L 34.552734 5.8945312 C 34.83429384177271 6.035314143856633 35.16570615822729 6.035314143856633 35.447266 5.8945312 L 36 5.6171875 L 36 26.832031 C 35.982150951947155 26.940022437464606 35.982150951947155 27.050211562535395 36 27.158203 L 36 32 L 14 32 L 14 27.167969 C 14.017849048052842 27.059977562535394 14.017849048052842 26.949788437464605 14 26.841797 L 14 5.6171875 L 14.552734 5.8945312 C 14.834293841772713 6.035314143856635 15.165706158227287 6.035314143856635 15.447266 5.8945312 L 17 5.1171875 z M 24 9 L 24 11.220703 C 22.400034 11.480913 21.210789 12.144211 20.664062 12.978516 C 19.996547 13.997145 20 15.052734 20 15.052734 C 20 16.481825 20.858999 17.58482 21.873047 18.224609 C 22.887094 18.864398 24.071516 19.216963 25.189453 19.582031 C 26.30739 19.9471 27.353422 20.323621 28.021484 20.789062 C 28.689546 21.254504 29 21.665308 29 22.544922 C 29 22.544922 29.0039 23.078058 28.564453 23.685547 C 28.125008 24.293036 27.2696 25 25 25 C 22.766667 25 21.938855 24.216621 21.472656 23.470703 C 21.006457 22.724785 21 22 21 22 L 19 22 C 19 22 18.9935 23.275215 19.777344 24.529297 C 20.444342 25.596494 21.919248 26.48535 24 26.771484 L 24 29 L 26 29 L 26 26.802734 C 28.044643 26.558744 29.497361 25.80877 30.185547 24.857422 C 30.996102 23.736911 31 22.544922 31 22.544922 C 31 21.037036 30.185454 19.858684 29.166016 19.148438 C 28.146578 18.438191 26.94261 18.051322 25.810547 17.681641 C 24.678484 17.311959 23.612906 16.958102 22.939453 16.533203 C 22.266001 16.108305 22 15.789144 22 15.052734 C 22 15.052734 22.0035 14.58159 22.335938 14.074219 C 22.668422 13.566848 23.254333 13 25 13 C 26.75 13 27.338646 13.560702 27.667969 14.054688 C 27.997292 14.548671 28 15 28 15 L 30 15 C 30 15 30.0027 13.951329 29.332031 12.945312 C 28.78297 12.121722 27.595647 11.472184 26 11.216797 L 26 9 L 24 9 z M 12 37 C 11.448 37 11 37.448 11 38 L 11 40 C 11 40.552 11.448 41 12 41 L 18 41 C 18.552 41 19 40.552 19 40 L 19 38 C 19 37.448 18.552 37 18 37 L 12 37 z M 22 37 C 21.448 37 21 37.448 21 38 L 21 40 C 21 40.552 21.448 41 22 41 L 28 41 C 28.552 41 29 40.552 29 40 L 29 38 C 29 37.448 28.552 37 28 37 L 22 37 z M 32 37 C 31.448 37 31 37.448 31 38 L 31 40 C 31 40.552 31.448 41 32 41 L 38 41 C 38.552 41 39 40.552 39 40 L 39 38 C 39 37.448 38.552 37 38 37 L 32 37 z M 12 43 C 11.448 43 11 43.448 11 44 L 11 46 C 11 46.552 11.448 47 12 47 L 18 47 C 18.552 47 19 46.552 19 46 L 19 44 C 19 43.448 18.552 43 18 43 L 12 43 z M 22 43 C 21.448 43 21 43.448 21 44 L 21 46 C 21 46.552 21.448 47 22 47 L 28 47 C 28.552 47 29 46.552 29 46 L 29 44 C 29 43.448 28.552 43 28 43 L 22 43 z M 32 43 C 31.448 43 31 43.448 31 44 L 31 46 C 31 46.552 31.448 47 32 47 L 38 47 C 38.552 47 39 46.552 39 46 L 39 44 C 39 43.448 38.552 43 38 43 L 32 43 z" stroke-linecap="round" />
                                        </g>
                                        </svg>
  
                                    
                                    <span>الفواتير</span>
                                </a>
                                
                            </li>
                            <li className="border-b-white border-b">
                                <a
                                    href="/UserProfile"
                                    className="flex items-center p-2 space-x-3 rounded-md gap-3 text-white"
                                >
                                    
                                    <svg id='Male_User_24' width='24' height='24' fill="#fff" viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


                                            <g transform="matrix(0.77 0 0 0.77 12 12)" >
                                            <path  transform=" translate(-16, -16)" d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z" stroke-linecap="round" />
                                            </g>
                                            </svg>
                                    <span>الملف الشخصي</span>
                                </a>
                              
                            </li>
                            <li className="border-b-white border-b  ">
                                <a
                                    href="#"
                                    onClick={logout} className="flex items-center p-2 space-x-3 rounded-md text-white"
                                >
                                    <svg id='Logout_Circle_24' width='24' height='24' fill="#fff"  viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' ><rect width='24' height='24' fill='#000000' opacity='0'/>


<g transform="matrix(0.42 0 0 0.42 12 12)" >
<g  >
<g transform="matrix(1 0 0 1 -5.25 0)"  >
{/* <path style="stroke: rgb(0,0,1); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-18.75, -24)" d="M 34.5 9.69056 C 31.1591 6.76975 26.7862 5 22 5 C 11.5066 5 3 13.5066 3 24 C 3 34.4934 11.5066 43 22 43 C 26.7862 43 31.1591 41.2303 34.5 38.3094" stroke-linecap="round" /> */}
</g>
<g transform="matrix(1 0 0 1 4.79 0)"  >
<path 
transform=" translate(-28.79, -24)" d="M 36.5711 32.8544 C 35.0816 34.0435 33.2825 33.2307 33.1724 31.3279 C 33.1234 30.4803 33.0796 29.4523 33.0484 28.2113 L 15.5791 27.5761 C 14.3287 27.5306 13.2318 26.7077 13.0865 25.4649 C 13.035 25.0241 13 24.5298 13 24.0005 C 13 23.4711 13.035 22.9768 13.0865 22.5361 C 13.2318 21.2933 14.3287 20.4704 15.5791 20.4249 L 33.0483 19.7896 C 33.0795 18.5485 33.1233 17.5203 33.1723 16.6726 C 33.2824 14.7694 35.082 13.9566 36.5719 15.1459 C 37.4679 15.8612 38.5774 16.7942 39.9176 17.9997 C 42.0447 19.9128 43.2998 21.3685 44.0303 22.3667 C 44.7628 23.3675 44.7627 24.6319 44.0302 25.6326 C 43.2996 26.6307 42.0446 28.0864 39.9176 29.9997 C 38.577 31.2057 37.4673 32.139 36.5711 32.8544 Z" stroke-linecap="round" />
</g>
</g>
</g>
</svg>


                                    <span>تسجيل الخروج</span>
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                    {/* )} */}
                </div>
            </div>
            
        </div>
  )
}