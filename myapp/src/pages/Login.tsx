import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
          
          const isLogin = res.data.find((e:event) => {
          return e.email === email && e.password === password;
            
          });

          localStorage.setItem("isLogin", isLogin.id);
          if (isLogin) {
            nav("/home");
          } else {
            alert("not login");
          }

           
        })
    }
  return (
  <>
  <label>البريد الاكتروني</label><br/>
  <input type="text"  onChange={e => setEmail(e.target.value)} className='border'/><br/>
  <label>الرقم السري</label><br/>
  <input type="password" onChange={e =>setPassword(e.target.value)} className='border'/><br/>
  <button onClick={submitLogin}>تسجيل الدخول</button>
  </>
  )
}
