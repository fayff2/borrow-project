import React from 'react'
import axios from 'axios';
import AdminSidebar from "../component/AdminSidebar";
import { Breadcrumbs } from "@material-tailwind/react"

type Iborrow = {
    name : string;
    amount: number;
    package: string;
    nameOfBorrower:string;
    orderStatus:string;
  
  }
  

export default function AdminBorrowR() {
    const [borrowData , setBorrowData] = React.useState <Iborrow[]>([])

  React.useEffect(()=>{
    getBorrow ()
},[]);

  const getBorrow =()=>{
    axios.get("https://64fc93ca605a026163aea289.mockapi.io/SendBorrow")
    .then((res)=>{
          console.log(res.data);
          
          setBorrowData(res.data);
        
    
})}
const filteredData = borrowData.filter(user => user.orderStatus == "تم التسليف");

  return (

<>
{filteredData.length > 0 ? (
  <div className="lg:flex lg:gap-20">
    <div className="lg:w-64 shadow-md">
    <AdminSidebar/>
      </div> 

<div className=" w-full mt-20">
<Breadcrumbs>
      <a href="/Admin">الرئيسية</a>
    </Breadcrumbs>
    
  <div className="flex flex-wrap  justify-center items-center gap-5 mt-10">
    {filteredData.map((item)=>{

return(
  <div className="flex w-72 h-52 bg-card shadow rounded  text-lg ">
    <div className="flex flex-col p-4 gap-4 w-full justify-center">
      <div className=" flex"> <h3>الاسم :</h3> <p>{item.name}</p></div>
      <div className=" flex"> <h3>اسم المسلف :</h3> <p>{item.nameOfBorrower}</p></div>
      <div className="flex"> <h3>المبلغ :</h3><p>{item.amount}</p></div>
      <div className="flex"> <h3>الدفعات :</h3> <p>{item.package} دفعات</p></div>
      <div className="flex"> <h3>حالة الطلب :</h3> <p>{item.orderStatus} </p></div>
      
   
       
  </div>
  </div>
)
    })}
    </div>
    </div>
    </div>
     ) : (
      <p></p>
    )}

</>
  )
}