import  { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'
import UserSidebar from '../component/UserSidebar';
import { Breadcrumbs } from "@material-tailwind/react"
import { Link } from 'react-router-dom';
import Footer from "../component/Footer"

type Iborrow={

        name : string;
        amount: number;
        package: string;
        total: number;
    
}

function SendBorrow() {

    const [state, setstate] = useState <Iborrow[]>([])
  const { id } = useParams();

    useEffect(() => {
        axios.get(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${id}`)

            .then((res) => {
                setstate([res.data]);
                
            })
            localStorage.setItem("isOrder",String(id))

    }, [id])
    return (
        <>
         <div className="lg:flex lg:gap-20 bg-img-header h-screen">
    <div className="lg:w-64 shadow-md">
    <UserSidebar/>
      </div>

      <div className=" w-full mt-10 ml-5">

      <div className="mt-20 mr-28 mb-5 ">

<Breadcrumbs>
  <a href="/Home" className="opacity-60 text-lg">الرئيسية</a>
 
  <a href="/SendBorrow" className=' text-lg' >
تسليف
  </a>
</Breadcrumbs>
</div>


     <div className="flex justify-center items-center text-xl">
     <div className="w-9/12 p-4 text-lg  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-10">
        
          {state.map((item) =>{
            return(
                <div className=' flex gap-5'>

                <div className="text-xl w-4/12">
                <label>الاسم</label>
            <input type="text" placeholder="ادخل الاسم الثلاثي" className= " text-xl  mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={item.name}/>
            </div>

                <div className="text-xl w-4/12">
                <label>المبلغ</label>
                <input type="text" placeholder="ادخل الاسم الثلاثي" className= " text-xl  mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={item.amount}/>
                </div>

                <div className="text-xl w-4/12">
                <label>الدفعات</label>
                <input type="text" placeholder="ادخل الاسم الثلاثي" className= " text-xl  mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={item.package}/>
                </div>
                    
                    </div>
                    


            
//             <div className="flex gap-2 border border-black p-1  w-44 lg:w-60">
//             <h1>المبلغ :</h1> <p>{item.amount}</p> 
//             </div>
                    
                

// <div className="flex gap-5">
// <div className="flex gap-2 lg:w-60">
//                <h1>الدفعات </h1> <p> {item.package} شهور</p>
//                </div>
        
                
//                 <div className="flex gap-2 lg:w-60">
//                 <h1>المجموع :</h1>   <p> {item.total}</p>
//                 </div>
// </div>
             
             
               
            
          
                
            

    
            )
          })}

<div className=" my-20  mx-3">
            <h1 className='text-xl font-bold my-4 '>طرق التسليف :</h1>
            <Link to={"/payment"}>
            <div className="flex justify-center">
                
            <button className='bg-light-blue w-72 lg:w-2/4 p-2 '>سحب بطاقة الائتمان</button>
            </div>
            </Link>
            <Link to={"/payment"}>
            <div className="flex justify-center mt-2">
            
            <button className='bg-light-blue w-72 lg:w-2/4  p-2 '>PayPal</button>
            </div>
            </Link>
            </div>
            
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

export default SendBorrow