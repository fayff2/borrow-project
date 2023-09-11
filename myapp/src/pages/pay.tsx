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
    <div className='flex flex-col gap-10'>
        <div className=''>
            <div className=' border h w-auto flex flex-col  '>
        <label htmlFor="">إصدار فاتورة  </label>
                <div className='flex gap-4'>
                 <input type="text" placeholder="ادخل الاسم الثلاثي" className="border" onChange={e=>setDataBorrow({...dataBorrow, name:(e.target.value)})}/><br/>
                 <input type="text"  placeholder="وصف العملية " className="border" onChange={e=>setDataBorrow({...dataBorrow, borrowDetails:(e.target.value)})}/><br/>
                 </div>
             </div>
        </div>

        <div className='border'>
            <div>
            <label htmlFor="">سحب بطاقة الائتمان</label>
                <div>
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



        <button  onClick={postOrder}>سحب بطاقة الائتمان</button>
    </div>
    </>
  )
}
