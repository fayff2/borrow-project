import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Rigster() {

    const [inputValue , setInputValue] = React.useState({
        name:"",
        NId:"",
        iBan:"",
        email :"",
        phone:"",
        password:"",
        status:false,
      
    })
    // const [data] =React.useState([]);
    const navigate = useNavigate();

    const submitData =()=>{
  
    axios.post("https://64f753f19d775408495375aa.mockapi.io/useraccount" ,inputValue).then(res =>{
        console.log(res.data)

    // localStorage.setItem("userInfo",JSON.stringify([...data,inputValue]))
    navigate('/login')
})
}

  return (
  <>
  
<div className="">
    <label>الاسم</label> <br/>
    <input type="text"  className='border' onChange={e => setInputValue({...inputValue,name:e.target.value})}/> <br/>
    <label>الهويه الوطنيه</label><br/>
    <input type="text" className='border' onChange={e => setInputValue({...inputValue,NId:e.target.value})}/><br/>
    <label>الايبان</label><br/>
    <input type="text" className='border' onChange={e => setInputValue({...inputValue,iBan:e.target.value})}/><br/>
    <label>الايميل</label><br/>
    <input type="text"  className='border' onChange={e => setInputValue({...inputValue,email:e.target.value})}/><br/>
    <label> رقم الجوال </label><br/>
    <input type="text"  className='border' onChange={e => setInputValue({...inputValue,phone:e.target.value})}/><br/>
    <label>الرقم السري</label><br/>
    <input type="password" className='border' onChange={e => setInputValue({...inputValue,password:e.target.value})}/><br/>
    <button onClick={submitData}>تسجيل </button>
</div>
  
  </>
  )
}
