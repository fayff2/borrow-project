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
    const id = localStorage.getItem("isOrder")

    React.useEffect(()=>{
      getBorrow ()
  },[]);
  
    const getBorrow =()=>{
      axios.get(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${id}`)
      .then((res)=>{
            console.log(res.data);
            
            setBorrowData(res.data);

          
      
  })}
  return (
    <>
   {borrowData.name}
       
           
   
    </>
  )
}