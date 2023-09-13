import axios from 'axios'
import React from 'react'
import UserSidebar from '../component/UserSidebar';
import { Breadcrumbs } from "@material-tailwind/react"
import userimg from '../assets/user.svg'
import Footer from '../component/Footer';

type Ishow ={
    id:string;
    NId:string;
    email:string;
    name:string;
    password:string;
    phone:string;
    status:boolean;
    iBan:string
  }


export default function UserProfile() {
    const [showUser , setShowUser]= React.useState<Ishow[]>([])

  const id = localStorage.getItem("isLogin")

  React.useEffect(()=>{
    axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`).then((res)=>{
      // console.log(res.data)
      setShowUser([res.data])
    })
  },[id])
  return (
    <>

<div className="lg:flex lg:gap-20 bg-img-header  h-full lg:h-screen xl: py-10 overflow-scroll">
<div className="lg:w-64 shadow-md">
      
    <UserSidebar/>
      </div>
      <div className=" w-full mt-10 ml-5">

      <div className="mt-20 mr-28 mb-5 ">

<Breadcrumbs>
  <a href="/Home" className=" text-zinc-800 text-lg">الرئيسية</a>
 
  <a href="UserProfile" className=' text-lg' >
الملف الشخصي
  </a>
</Breadcrumbs>
</div>



<div className="flex justify-center items-center  ">
      <div className="w-9/12 p-4  mb-5 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  



    {showUser.map((item)=>{
      return(
       <div className='flex flex-col gap-10  lg:items-start items-center' >
<div className="flex gap-8">
  <div className="">
  <img src={userimg} alt=""  className='w-24'/>
  </div>
  
  <div className=" flex flex-col justify-center gap-2">
  <h1 className='text-lg font-bold'>{item.name}</h1>
  <p className='bg-light-blue w-14 text-center'>{item.status? "مفعل" : "غير مفعل"}</p>
  </div>

</div>
       
       <div className=" w-9/12 text-lg flex flex-col  gap-3">
        <label>الاسم</label>
       <input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='text' value={item.NId}  />
      <label>البريد الالكتروني</label>
       <input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='text' value={item.email}  />
       <label>الحساب البنكي </label>
       <input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='text' value={item.iBan}  />
       <label>رقم الجوال</label>
       <input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='text' value={item.phone}  />
       <label>كلمة المرور </label>
       <input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='text' value={item.password}  />

       
       </div>
       
       
      
       </div>
      )
    })}
    </div>
    </div>
    </div>
    </div>
    <div className="bg-dark-blue w-full h-10 flex justify-center items-center text-center ">
      <Footer/>
    </div>
    </>
    
  )
}
