import React from "react"
import axios from "axios"

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
    <div>

        <input type="text" placeholder="ادخل الاسم الثلاثي" className="border" onChange={e=>setDataBorrow({...dataBorrow, name:e.target.value})}/><br/>
        <input type="number"  placeholder="ادخل المبلغ " className="border" value={dataBorrow.amount} onChange={e=>setDataBorrow({...dataBorrow, amount:Number(e.target.value)})}/><br/>

        <button value={"4"} onClick={(e)=>{test(e)
        setDataBorrow({...dataBorrow , package:"4"})}} >بكج 4</button>
      <button value={"2"}  onClick={(e)=>{test(e) 
      setDataBorrow({...dataBorrow , package:"2"})
    
    
    }} >بكج 2</button>
        <button  onClick={postBorrow}>اضافه</button>
        
        <h1>{total}</h1>
        
    </div>
  )
}
