import axios from 'axios';
import React from 'react'

type Iborrow = {
    name:string;
    borrowDetails: string;

}


export default function pay() {
    const [dataBorrow , setDataBorrow] = React.useState <Iborrow>({
        name:"",
        borrowDetails:""
    })

    const postOrder = ()=>{
        axios.post("https://64fc93ca605a026163aea289.mockapi.io/borrowOrder",{
            name:dataBorrow.name,
            borrowDetails:dataBorrow.borrowDetails,

     } )
        .then(res =>{
            console.log(res);

            
        })
    }

  return (
    <>
         <input type="text" placeholder="ادخل الاسم الثلاثي" className="border" onChange={e=>setDataBorrow({...dataBorrow, name:(e.target.value)})}/><br/>
        <input type="text"  placeholder="وصف العملية " className="border" onChange={e=>setDataBorrow({...dataBorrow, borrowDetails:(e.target.value)})}/><br/>

        <button  onClick={postOrder}>اضافه</button>

    </>
  )
}
