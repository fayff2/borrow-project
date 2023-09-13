import React from "react"
import axios from "axios"
import UserSidebar from "../component/UserSidebar"
import { Breadcrumbs } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import Footer from "../component/Footer"

type Iborrow = {
    name : string;
    amount: number;
    package: string;
    total: number;




}



export default function BorrowRequest() {
    const [dataBorrow , setDataBorrow] = React.useState <Iborrow>({
        name:"",
        amount: 0,
        package:"",
        total: 0,
       
    })
    const [total , setTotal ] = React.useState("")

    const postBorrow = ()=>{
        axios.post("https://64fc93ca605a026163aea289.mockapi.io/SendBorrow",{
            name:dataBorrow.name,
            amount:dataBorrow.amount,
            package:dataBorrow.package,
            total: total,
           

     } )
        .then(res =>{
            console.log(res);

            
        })

     

    }
    const cal = (e) =>{


        if(e.target.value === "4"){
            const vat2 = 0.1;
            const amount2 = dataBorrow.amount * vat2 ;
            const total1 = amount2 + dataBorrow.amount
            const total2 =  total1
            console.log( dataBorrow.amount * vat2);
            

            setTotal(total2.toString())
            
        }else if(e.target.value  === "2"){
            const vat2 = 0.05;
            const amount2 = dataBorrow.amount * vat2 ;
            const total1 = amount2 + dataBorrow.amount
            const total2 =  total1
            console.log( dataBorrow.amount * vat2);

            setTotal(total2.toString())

            
        }
       

    }
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
 
  <a href="/BorrowRequest" className=' text-lg' >
طلب سلف
  </a>
</Breadcrumbs>
</div>


    
    <div className="flex justify-center items-center text-xl">
        <div className="w-9/12 p-4 text-lg  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-10">

<div className="flex  flex-col gap-5 justify-center items-center lg:flex-row">

<div className="text-xl w-6/12">
<label>الاسم</label>
<input type="text" placeholder="ادخل الاسم الثلاثي" className= " text-xl  mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={e=>setDataBorrow({...dataBorrow, name:e.target.value})}/>
      
</div>

    <div className="text-xl w-6/12">
     <label>المبلغ</label>
     <input type="number"  placeholder="ادخل المبلغ " className="text-xl mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={dataBorrow.amount} onChange={e=>setDataBorrow({...dataBorrow, amount:Number(e.target.value)})}/>
    </div>
 



</div>
    
<h1 className="text-right text-xl">اختر الدفعات :</h1>
<div className="flex  flex-col gap-5 justify-center items-center lg:flex-row">
   
<button value={"4"} onClick={(e)=>{cal(e)
setDataBorrow({...dataBorrow , package:"4"})}} className="bg-light-blue w-6/12 h-14 rounded-md" >4 شهور هامش الربح  10%</button>

      <button value={"2"}  onClick={(e)=>{cal(e) 
      setDataBorrow({...dataBorrow , package:"2"})}} className="bg-light-blue w-6/12 h-14 rounded-md" > شهرين هامش الربح  5%</button>
</div>
       
        <div className="">
            <h1>المجموع :</h1>
        <h1>{total}</h1>
        </div>



        <div className="flex justify-center">
    <Link to="/home">
    <button  onClick={postBorrow} className="button-dark-blue w-36 h-10 rounded-md mt-5">اضافه</button></Link>
    </div>
     
       
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
