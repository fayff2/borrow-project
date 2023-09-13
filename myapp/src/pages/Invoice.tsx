import React from 'react'
import axios from 'axios';
import AdminSidebar from "../component/AdminSidebar";
import { Breadcrumbs } from "@material-tailwind/react"
import Footer from '../component/Footer';

type Iborrow = {
    id:string;
    name : string;
    amount: number;
    package: string;
    nameOfBorrower:string;
    orderStatus:string;
  
  }
  

export default function Invoice() {
    const [borrowData , setBorrowData] = React.useState <Iborrow[]>([])

  React.useEffect(()=>{
    getBorrow ()
},[]);

  const getBorrow =()=>{
    axios.get("https://64fc93ca605a026163aea289.mockapi.io/SendBorrow")
    .then((res)=>{
      
          setBorrowData(res.data);
        
    
})}
const filteredData = borrowData.filter(user => user.orderStatus == "تم التسليف");

  return (

<>
<div className="lg:flex lg:gap-20 bg-img-header h-screen text-lg">
<div className="lg:w-64 shadow-md">
      <AdminSidebar/>
    </div>

   
    <div className="w-full mt-10 ml-5 text-lg">
    <div className="mt-20 mr-28 mb-5 ">

<Breadcrumbs>
  <a href="/Home" className="opacity-60 text-lg">الرئيسية</a>
 
  <a href="/BorrowRequest" className=' text-lg' >
طلب سلف
  </a>
</Breadcrumbs>
</div>
        <div className="relative overflow-x-auto bg-white ">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
        <tr>
                <th scope="col" className="px-6 py-3">
                 اسم المستلف
                    </th>
                <th scope="col" className="px-6 py-3">
                    اسم المسلف
                </th>
                <th scope="col" className="px-6 py-3">
                المبلغ
                </th>
                <th scope="col" className="px-6 py-3">
                    الدفعات
                </th>

                <th scope="col" className="px-6 py-3">
                    حالة الطلب
                </th>
               
            </tr>
        </thead>
    
{filteredData.length > 0 ? (

  <tbody>
    {filteredData.map((item)=>{

return(

    <>
    

<tr className=" text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
  

  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
  <p>{item.name}</p>
    </th>
    <td className="px-6 py-4">
    <p>{item.nameOfBorrower}</p>
    </td>
    <td className="px-6 py-4">
    <p>{item.amount}</p>
    </td>
    <td className="px-6 py-4">
    <p>{item.package}</p>
    </td>
    <td className="px-6 py-4">
    <p>{item.orderStatus}</p>
    </td>
   
     
      </tr>
      
   
       
  </>
 
)
    })}
    </tbody>
   
  
      
     ) : (
      <p></p>
    )}
   
    </table>
  </div>
  </div>
</div>
<div className="bg-dark-blue w-full h-10 flex justify-center items-center text-center">
      <Footer/>
    </div>
</>
  )
}