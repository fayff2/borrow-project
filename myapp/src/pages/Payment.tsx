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
    const userReqId =localStorage.getItem("userRequestId")
    const userProvId=localStorage.getItem("isLogin")
    const postOrder = ()=>{
        axios.put(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${userProvId}`,{
           Borrower:{
            nameOfBorrower:dataBorrow.name,
            orderStatus:"تم التسليف",
            userReqId:userReqId,
            userProvId:userProvId,
            

            }

     } )
        .then(res =>{
            console.log(res);

            
        })
    }

  return (
    <> <div className="lg:flex lg:gap-20">
    <div className="lg:w-64 shadow-md">
    <UserSidebar/>
      </div> 

      <div className=" w-full mt-20 ">

<Breadcrumbs>
<a href="/Home" className="opacity-60">الرئيسية</a>

<a href="/BorrowRequest" >
تسليف
</a>
<a href="/BorrowRequest" >
دفع 
</a>
</Breadcrumbs>

<div className="flex flex-col items-center mt-10">
            <div className=' border border-black w-full lg:w-3/4 flex flex-col  justify-center  gap-5 mb-10 h-32 p-3'>
        <label htmlFor="">إصدار فاتورة </label>
                <div className='flex gap-4 justify-center'>
                 <input type="text" placeholder="ادخل الاسم الثلاثي" className="border" onChange={e=>setDataBorrow({...dataBorrow, name:(e.target.value)})}/><br/>
                 <input type="text"  placeholder="وصف العملية " className="border" onChange={e=>setDataBorrow({...dataBorrow, borrowDetails:(e.target.value)})}/><br/>
                 </div>
             </div>
       

        <div className='border border-black w-full lg:w-3/4 flex flex-col justify-center h-52 p-3'>
            <div>
            <label className=''>سحب بطاقة الائتمان</label>
                <div className=''>
                    <div className='flex flex-col'>
                    <label htmlFor="">رقم البطاقة</label>
                    <input type="text" className='border w-80' />
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="">تاريخ الإنتهاء</label>
                            <input type="text" className='border w-48' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">CVV</label>
                            <input type="text" className='border w-48' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
      
            
                 <button  className='bg-light-blue w-72 lg:w-2/4 p-2 mt-5 ' onClick={postOrder}>سحب بطاقة الائتمان</button>
                
               
         

       




</div>
        
        </div>
        </div>

    
    </>
  )
}