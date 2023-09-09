import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavbarSide } from '../component/NavbarSide';
import Swal from 'sweetalert2'

type event = {
    email: string;
    password: string;
  };

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    const submitLogin =()=>{
        axios.get("https://64f753f19d775408495375aa.mockapi.io/useraccount").then(res =>{
            console.log(res.data)

            const role ="admin"
            const pass = "5566"
             
            
            if(role == email && pass){
              localStorage.setItem("adminLog" ,JSON.stringify(email) )
    
              nav("/admin")
            }else {
              if (email === ""){
                Swal.fire("الرجاء ادخال ايميل صحيح")

              }else if (password === ""){
                Swal.fire("الرجاء ادخال كلمة مرور صحيحه")
              }else{

                const isLogin = res.data.find((e:event) => {
                  return e.email === email && e.password === password;
                    
                  });
        
                  localStorage.setItem("isLogin", isLogin.id);
                  if (isLogin) {
                    nav("/home");
                  } else {
                    Swal.fire("الايميل او كلمة المرور غير صحيحه ");
                  }
              }

            }
         

           
        })
    }
  return (
  <>
  {/* <label>البريد الاكتروني</label><br/>
  <input type="text"  onChange={e => setEmail(e.target.value)} className='border'/><br/>
  <label>الرقم السري</label><br/>
  <input type="password" onChange={e =>setPassword(e.target.value)} className='border'/><br/>
  <button onClick={submitLogin}>تسجيل الدخول</button> */}


  <div className="bg-img h-full">
   <NavbarSide/>

<div className="flex justify-center items-center h-screen">
<div className="w-full max-w-xs lg:max-w-xl">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    



    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2"
      > البريد الالكتروني </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="ادخل البريد الالكتروني "   onChange={e => setEmail(e.target.value)}/>
    </div>





    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
     كلمة المرور
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   type="password" placeholder="********" onChange={e =>setPassword(e.target.value)} />
    </div>
    <div className="flex items-center justify-between gap-10">

      <button className="bg-purple font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitLogin}>
      تسجيل الدخول 
      </button>

      
    </div>
  </div>
 
</div>
</div>
</div>


  </>
  )
}