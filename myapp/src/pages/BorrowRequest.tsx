import React from "react"
import axios from "axios"
import UserSidebar from "../component/UserSidebar"
import { Breadcrumbs } from "@material-tailwind/react"
import { Link } from "react-router-dom"

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
    const test = (e) =>{

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
    <div className="lg:flex lg:gap-20">
    <div className="lg:w-64 shadow-md">
    <UserSidebar/>
      </div>

      <div className=" w-full mt-20">
<Breadcrumbs>
      <a href="/Home" className="opacity-60">الرئيسية</a>
     
      <a href="/BorrowRequest" >
       طلب سلف
      </a>
    </Breadcrumbs>
    
    <div className="flex  items-center justify-center lg:mt-32 mt-24">
        <div className="border border-black  flex flex-col gap-10 p-5 h-72 text-lg">

<div className="flex  flex-col gap-5 justify-center items-center lg:flex-row">

<div className="">
<label>الاسم</label><br></br>
<input type="text" placeholder="ادخل الاسم الثلاثي" className=" w-60 border border-black"  onChange={e=>setDataBorrow({...dataBorrow, name:e.target.value})}/>
      
</div>

    <div className="">
     <label>المبلغ</label><br></br>
     <input type="number"  placeholder="ادخل المبلغ " className=" w-60 border border-black" value={dataBorrow.amount} onChange={e=>setDataBorrow({...dataBorrow, amount:Number(e.target.value)})}/>
    </div>
 



</div>
    
<div className="flex  flex-col gap-5 justify-center items-center lg:flex-row">
<button value={"4"} onClick={(e)=>{test(e)
        setDataBorrow({...dataBorrow , package:"4"})}} className="bg-light-blue w-60  h-14" >4 شهور هامش الربح  10%</button>

      <button value={"2"}  onClick={(e)=>{test(e) 
      setDataBorrow({...dataBorrow , package:"2"})}} className="bg-light-blue w-60 h-14" > شهرين هامش الربح  5%</button>
</div>
       
        <div className="">
            <h1>المجموع :</h1>
        <h1>{total}</h1>
        </div>
     
       
    </div>
    
  

       


        </div>
        <div className="flex justify-center">
    <Link to="/home">
    <button  onClick={postBorrow} className="button-color mt-5">اضافه</button></Link>
    </div>
    </div>
        
    </div>
   
  )
}
