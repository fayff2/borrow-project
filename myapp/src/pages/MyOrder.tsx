import React from 'react'
import axios from 'axios';
import UserSidebar from "../component/UserSidebar";
import Footer from "../component/Footer"
import { Breadcrumbs } from "@material-tailwind/react"
type Iborrow = {
    id:string;
    name : string;
    amount: number;
    package: string;
  
  }
  

export default function MyOrder() {

    const [borrowData , setBorrowData] = React.useState <Iborrow[]>([])
    const id=localStorage.getItem("isOrder")
 



React.useEffect(()=>{
        axios.get(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${id}`).then((res)=>{
            // console.log(res.data)
            
            setBorrowData([res.data]);
           
          })
      
        },[id]);

    
  return (
 <>
 
 <div className="lg:flex lg:gap-20 bg-img-header h-screen">
    <div className="lg:w-64 shadow-md">
      
    <UserSidebar/>
      </div> 
   
    
      
   
 {borrowData.map(item =>{
    return(
        <>


<div className=" w-full ml-5">

    <div className="mt-32 mr-28 ">

    <Breadcrumbs>
      <a href="/Home" className="opacity-60 text-lg">الرئيسية</a>
     
      <a href="/MyOrder" className=' text-lg' >
     طلباتي
      </a>
    </Breadcrumbs>
    </div>

    <div className="flex justify-center items-center mt-24">
<div className=" overflow-x-auto bg-white h-96 w-9/12 ">
    <table className="w-full text-lg text-right text-gray-700 dark:text-gray-400">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  #id
                </th>
                <th scope="col" className="px-6 py-3">
                    الاسم
                </th>
                <th scope="col" className="px-6 py-3">
                   المبلغ 
                </th>
                <th scope="col" className="px-6 py-3">
                    الدفعات 
                </th>

            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
                </th>
                <td className="px-6 py-4">
                {item.name}
                </td>
                <td className="px-6 py-4">
                {item.amount}
                </td>
                <td className="px-6 py-4">
                {item.package}
                </td>

            
                
            </tr>
          
        </tbody>
    </table>
</div>
</div>
</div>
        </>
    )
  
 })}
 </div>
 <div className="bg-dark-blue w-full h-10 flex justify-center items-center text-center">
      <Footer/>
    </div>
 
 </>
  )
}
