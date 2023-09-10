import axios from 'axios';
import React from 'react'

type Iborrow = {
    name : string;
    amount: number;
    package: string;
    total: number;

}

export default function () {
    const [borrowDetails , setBorrowDetails] = React.useState<Iborrow[]>([])

    const id = localStorage.getItem("isLogin")


    React.useEffect(()=>{
        axios.get(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${id}`)
        .then((res)=>{
          console.log(res.data)
          setBorrowDetails(res.data)
        })
      },[setBorrowDetails]
      )

  return (
    <>
            <p>{borrowDetails.name}</p>
            <p>{borrowDetails.amount}</p>
            <p>{borrowDetails.package}</p>
            <p>{borrowDetails.total}</p>

            <h3>طرق التسليف:</h3>
            <div className='flex flex-col gap-2 w-80'>
            <button className='border '>سحب بطافة الإتمان</button>
            <button className='border'>Paypal</button>
            </div>
    </>
  )
}
