import axios from 'axios';
import React from 'react'
// import UserSidebar from '../component/UserSidebar';
// import { Breadcrumbs } from "@material-tailwind/react"

type Iborrow = {
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
      const id = localStorage.getItem("isOrder")

      axios.get(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${id}`)
      .then((res)=>{
            console.log(res.data);
            
            setBorrowData(res.data);

          
      
  })}
  return (
    <>
   <div className='flex flex-col gap-3'>
    <p> الاسم:{borrowData.name}</p>
    <p> المبلغ:{borrowData.amount}</p>
    <p> الدفعات:{borrowData.package}</p>
    <p> اسم المسلف:{borrowData.nameOfBorrower}</p>
   
  
   </div>
       
           
   
    </>
  )
}