import axios from 'axios';
import React from 'react'
import UserSidebar from '../component/UserSidebar';
import { Breadcrumbs } from "@material-tailwind/react"
// import { Link } from 'react-router-dom';

type Iborrow = {
    name:string;
    borrowDetails: string;

}



export default function Payment() {
    const [dataBorrow , setDataBorrow] = React.useState <Iborrow>({
        name:"",
        borrowDetails:""
    })


    const postOrder = ()=>{
        axios.post("https://64fc93ca605a026163aea289.mockapi.io/borrowOrder",{
            name:dataBorrow.name,
            borrowDetails:dataBorrow.borrowDetails,

     } )
        .then(res =>{
            console.log(res);

            
        })
    }

  return (
    <> <div className="lg:flex lg:gap-20 bg-img-header h-full lg:h-screen xl: py-10 overflow-scroll">
    <div className="lg:w-64 shadow-md">
      
      <UserSidebar/>
        </div> 

      <div className=" w-full mt-20 ">
      <div className="mt-10 mr-28 mb-5 ">

<Breadcrumbs>
  <a href="/Home" className="opacity-60 text-lg">الرئيسية</a>
  <a href="/SendBorrow" className=' text-lg' >
تسليف
  </a>
 
  <a href="/SendBorrow" className=' text-lg' >
دفع
  </a>
</Breadcrumbs>
</div>

<div className="flex justify-center items-center text-xl">
<div className="w-9/12 p-4 text-lg  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-1 justify-center ">
<label className='text-right'>إصدار فاتورة </label>
            <div className=' border border-blue-900 w-full flex rounded-sm   gap-5 mb-10 h-32 p-3'>
        
                

                <div className='flex flex-col'>
                <label className=''>الاسم</label>
                 <input type="text" placeholder="ادخل الاسم الثلاثي" className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setDataBorrow({...dataBorrow, name:(e.target.value)})}/>
                </div>
                
                <div className='flex flex-col'>
                <label className=''>وصف العملية</label>
                 <input type="text"  placeholder="وصف العملية " className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setDataBorrow({...dataBorrow, borrowDetails:(e.target.value)})}/>
                </div>
                
               
             </div>
       
             <label className=''>سحب بطاقة الائتمان</label>
        <div className='border border-blue-900 w-full rounded-sm  flex flex-col justify-center gap-10 p-3'>
                
                    <div className='flex flex-col'>
                    <label htmlFor="">رقم البطاقة</label>
                    <input type="text" className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block   w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="">تاريخ الإنتهاء</label>
                            <input type="text" className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">CVV</label>
                            <input type="text" className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                
           


        </div>
      
            
      <button  className='bg-light-blue w-72 lg:w-2/4 p-2 mt-5 ' onClick={postOrder}>سحب بطاقة الائتمان</button>
                
               </div>
         

       




</div>
        
        </div>
        </div>

    
    </>
  )
}