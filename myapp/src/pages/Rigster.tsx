import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { NavbarSide } from '../component/NavbarSide';
import Swal from 'sweetalert2'
import Footer from "../component/Footer"


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

        const {name , email,password ,iBan ,NId ,phone }= inputValue;
        if (name === ""){
           Swal.fire("الرجاء ادخال الاسم ");
        } else if (email === ""){
          Swal.fire("الرجاء ادخال البريد الالكتروني"); 
        }else if (!email.includes("@")){
           Swal.fire("الرجاء ادخال بريد الكتروني صحيح")}
       else if (password === ""){
           Swal.fire("الرجاء ادخال كلمة مرور")
        }else if (password.length < 5){
           Swal.fire("الرجاء ادخال كلمة مرور اكبر من 5 ارقام ")
        }else if(!iBan.startsWith("SA") ){
          Swal.fire("الرجاء ادخال حساب ايبان صحيح")
        }else if (NId === ""){
          Swal.fire("الرجاء ادخال الهوية الوطنية")
        }else if(phone === ""){
          Swal.fire("الرجاء ادخال رقم الجوال صحيح ")
        }else{
        Swal.fire("تم اضافة المعلومات بشكل صحيح")
    // localStorage.setItem("userInfo",JSON.stringify([...data,inputValue]))
    navigate('/login')
        }

})
}

  return (
  <>
  

  <div className="bg-img h-full">
   <NavbarSide/>

<div className="flex justify-center items-center h-screen">
<div className="w-full max-w-xs lg:max-w-xl">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

<h1 className='text-center text-2xl my-4 font-bold'>التسجيل</h1>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
          الاسم 
  
        </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"  placeholder="ادخل الاسم الثلاثي "  onChange={e => setInputValue({...inputValue,name:e.target.value})} />
    </div>



    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2"
      >الهويه الوطنية  </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="ادخل الهوية الوطنية"  onChange={e => setInputValue({...inputValue,NId:e.target.value})}/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2"
      > الايبان  </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="ادخل الايبان "  onChange={e => setInputValue({...inputValue,iBan:e.target.value})}/>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2"
      > البريد الالكتروني </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="ادخل البريد الالكتروني "  onChange={e => setInputValue({...inputValue,email:e.target.value})}/>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2"
      > رقم الجوال</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="ادخل رقم الجوال  "   onChange={e => setInputValue({...inputValue,phone:e.target.value})}/>
    </div>



    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
     كلمة المرور
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline "   type="password" placeholder="********" onChange={e => setInputValue({...inputValue,password:e.target.value})}/>
    </div>
    <div className="flex items-center justify-between gap-10">

      <button className="bg-light-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitData}>
      تسجيل 
      </button>

      <div className=" cursor-pointer">
     <a href="/Login">  هل لديك حساب مسبقا ؟ تسجيل الدخول </a>
      </div>
    </div>
  </div>
 
</div>
</div>
<div className="py-3 border">

<Footer/>
</div>
</div>
  
  </>
  )
}