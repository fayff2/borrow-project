import React from 'react'
import axios from 'axios';
import AdminSidebar from "../component/AdminSidebar";
import { Breadcrumbs } from "@material-tailwind/react"
import userimg from "../assets/149071.png"
import Footer from '../component/Footer';
type Iborrow = {
    name : string;
    amount: number;
    package: string;
  
  }
  

export default function AdminBorrowR() {
    const [borrowData , setBorrowData] = React.useState <Iborrow[]>([])

  React.useEffect(()=>{
    getBorrow ()
},[]);

  const getBorrow =()=>{
    axios.get("https://64fc93ca605a026163aea289.mockapi.io/SendBorrow")
    .then((res)=>{
    
    setBorrowData(res.data);
})}

  return (

<>
<div className="lg:flex lg:gap-20 bg-img-header h-screen overflow-scroll">
    <div className="lg:w-64 shadow-md">
    <AdminSidebar/>
      </div> 

      <div className=" w-full mt-10 ml-5">

<div>
  
<div className=" w-full p-4 flex flex-col lg:flex-row items-center lg:justify-between lg:gap-20 bg-white  border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col lg:flex-row text-center items-center w-6/12 gap-5 ">
    <img src={userimg} alt="" className="w-20 h-20"/>
    <div className="">
    <span className="font-bold   text-center text-2xl">  مرحباً بك admin   <span className=" text-2xl font-extrabold text-blue-950 mr-2"></span> </span>
    </div>
  
  </div>
    

    <div className=" w-6/12  flex justify-center items-center">
   
  <div className="relative flex w-96 flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-blue-900 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="البحث"
      aria-label="Search"
      aria-describedby="button-addon3" />

  </div>

        
    </div>
</div>

</div>
<div className="mt-5">
<Breadcrumbs>

<a href="/Admin" className=" text-lg">الرئيسية</a>
      <a href="/Admin" className="  text-lg">طلبات السلف</a>

     
    </Breadcrumbs>
</div>

    
  <div className="flex flex-wrap justify-center items-center gap-5 mt-10 w-full p-4">


    {borrowData.map((item)=>{

return(
  <div className="flex w-72 h-52 bg-card shadow rounded  text-lg ">
    <div className="flex flex-col p-4 gap-4 w-full justify-center">
      <div className=" flex"> <h3>الاسم :</h3> <p>{item.name}</p></div>
      <div className="flex"> <h3>المبلغ :</h3><p>{item.amount}</p></div>
      <div className="flex"> <h3>الدفعات :</h3> <p>{item.package} دفعات</p></div>
      
     
       
  </div>
  </div>
)
    })}
    </div>
    </div>
    </div>
    <div className="bg-dark-blue w-full h-10 flex justify-center items-center text-center">
      <Footer/>
    </div>

</>
  )
}
