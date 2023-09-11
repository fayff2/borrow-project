import  { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'
import UserSidebar from '../component/UserSidebar';

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

    }, [id])
    return (
        <>
        <div className="flex gap-20">
    <div className="lg:w-64">
    <UserSidebar/>
      </div> 

      <div className=" w-full mt-20">
     <div className="flex flex-col justify-center">
          {state.map(item =>{
            return(
                <div className="flex  w-3/5 h-52 border border-black rounded  text-lg   p-3 justify-center">
                <div className="flex gap-20">
              <p> <h1>الاسم</h1>{item.name}</p> 
              <p> <h1>المبلغ </h1>{item.amount}</p> 
                </div>
                <div className="flex gap-20">
                <p> <h1>الدفعات </h1>{item.package} شهور</p>
              <p> <h1>المجموع</h1>{item.total}</p>
                </div>
            
          
                
                </div>

    
            )
          })}
            <div className="">
            <h3>طرق التسليف :</h3>
            <button>سحب بطاقة الائتمان</button><br></br>
            <button>PayPal</button>
            </div>
          </div>
          </div>
          </div>
        </>
    )
}

export default SendBorrow