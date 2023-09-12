import  { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'
import UserSidebar from '../component/UserSidebar';
import { Breadcrumbs } from "@material-tailwind/react"
import { Link } from 'react-router-dom';

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
            }).catch(err => {
                console.log(err);
            })
            localStorage.setItem("isOrder", id)

    }, [id])
    return (
        <>
        <div className="lg:flex lg:gap-20">
    <div className="lg:w-64 shadow-md">
    <UserSidebar/>
      </div> 

      <div className=" w-full mt-20">

      <Breadcrumbs>
      <a href="/Home" className="opacity-60">الرئيسية</a>
     
      <a href="/BorrowRequest" >
     تسليف
      </a>
    </Breadcrumbs>


     <div className="flex items-center justify-center lg:mt-32 mt-24">
          {state.map(item =>{
            return(
                <div className=" w-full lg:w-3/4 h-52 border  border-black rounded  text-lg flex flex-col  gap-10 items-center justify-center  p-3 ">
                    <div className="flex gap-5">
                    <div className="flex gap-2 border border-black p-1  w-44 lg:w-60">
                <h1>الاسم :</h1> <p>{item.name}</p> 
                </div>
            
            <div className="flex gap-2 border border-black p-1  w-44 lg:w-60">
            <h1>المبلغ :</h1> <p>{item.amount}</p> 
            </div>
                    </div>
                

<div className="flex gap-5">
<div className="flex gap-2 lg:w-60">
               <h1>الدفعات </h1> <p> {item.package} شهور</p>
               </div>
        
                
                <div className="flex gap-2 lg:w-60">
                <h1>المجموع :</h1>   <p> {item.total}</p>
                </div>
</div>
             
             
               
            
          
                
                </div>

    
            )
          })}
            
          </div>
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
        </>
    )
}

export default SendBorrow