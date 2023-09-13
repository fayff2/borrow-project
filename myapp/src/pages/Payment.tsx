import axios from 'axios';
import React from 'react'
import UserSidebar from '../component/UserSidebar';
import { Breadcrumbs } from "@material-tailwind/react"
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Swal from 'sweetalert2'


type Iborrow = {
    name:string;
    borrowDetails: string;

}



export default function Payment() {
    const [dataBorrow , setDataBorrow] = React.useState <Iborrow>({
        name:"",
        borrowDetails:""
    })
    const id=localStorage.getItem("isOrder")
    const nav = useNavigate();

    const postOrder = ()=>{
        axios.put(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${id}`,{
            nameOfBorrower:dataBorrow.name,
            orderStatus:"تم التسليف"

     } )
        .then((res) =>{
          if(res.data){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'تم الدفع بنجاح',
            showConfirmButton: false,
         
          })

          
        }
        nav("/home")


            
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

<div className="flex justify-center items-center text-xl p-2">
<div className="w-9/12 p-4 text-lg  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-1 justify-center ">
<label className='text-right'>إصدار فاتورة </label>
            <div className=' border border-black w-full flex flex-col lg:flex-row rounded-sm  gap-5 mb-10 h-64  lg:h-32 p-3'>
        
                

                <div className='flex flex-col  justify-center'>
                <label className=''>الاسم</label>
                 <input type="text" placeholder="ادخل الاسم الثلاثي" className="text-lg lg:text-xl   mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-full lg:w-64  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setDataBorrow({...dataBorrow, name:(e.target.value)})}/>
                </div>
                
                <div className='flex flex-col justify-center'>
                <label className=''>وصف العملية</label>
                 <input type="text"  placeholder="وصف العملية " className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-full lg:w-64  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setDataBorrow({...dataBorrow, borrowDetails:(e.target.value)})}/>
                </div>
                
               
             </div>
       
             <label className=''>سحب بطاقة الائتمان</label>
        <div className='border border-black w-full rounded-sm  flex flex-col justify-center gap-10 p-3'>
                
                    <div className='flex flex-col'>
                    <label htmlFor="">رقم البطاقة</label>
                    <input type="text" className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
      
            
      <button  className='bg-light-blue lw-full lg:w-2/4 p-2   my-5 mx-auto' onClick={postOrder}>سحب بطاقة الائتمان</button>
                
               </div>
         

       




</div>
        
        </div>
        </div>
        <div className="bg-dark-blue w-full h-10 flex justify-center items-center text-center">
      <Footer/>
    </div>

    
    </>
  )
}