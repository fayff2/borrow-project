import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from '../assets/logo.svg'
 
export function NavbarSide() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="text-center  flex flex-col items-start lg:mb-0 lg:mt-0 lg:mr-10 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
       الرئيسية
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        من نحن؟
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
         تواصل معنا
        </a>
      </Typography>
      
    </ul>
  );
 
  return (
    <Navbar className="px-4 lg:px-8 w-screen border-0 bg-transparent text-black ">
      <div className="container flex justify-between items-center ">
        <Typography
          as="a"
          href="#"
          className=" cursor-pointer font-medium"
        >
       <img src={Logo} alt=""  className=" w-32 h-32"/>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:mr-auto lg:flex lg:gap-6">
        <Button className="button-color text-black">
          <a href="/Rigster">التسجيل</a>
        </Button>
        <Button  className="button-border text-black">
          <a href="/Login"> تسجيل الدخول</a>
        </Button>
        </div>
        
       
        <IconButton
          variant="text"
          className="mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container flex flex-col justify-center items-center text-center">
          {navList}
          <div className="mt-5 flex gap-5 mb-10">
          <Button className="button-color text-black">
          <a href="/Rigster">التسجيل</a>
        </Button>
        <Button  className="button-border text-black">
          <a href="/Login"> تسجيل الدخول</a>
        </Button>
          </div>
          
        </div>
      </MobileNav>
    </Navbar>
  );
}