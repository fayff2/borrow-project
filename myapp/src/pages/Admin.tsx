import axios from "axios"
import React from "react"

type Ishow ={
  id:string;
  NId:string;
  email:string;
  name:string;
  password:string;
  phone:string;
  status:boolean;
}

export default function Admin() {
const [showUsers , setShowUsers] = React.useState<Ishow[]>([]);
const [dataUsers , setDataUsers] = React.useState<Ishow>({
  id:"",
  NId:"",
  email:"",
  name:"",
  password:"",
  phone:"",
  status:false,

});

const id = localStorage.getItem("isLogin")


React.useEffect(()=>{
  axios.get("https://64f753f19d775408495375aa.mockapi.io/useraccount").then((res)=>{
setShowUsers(res.data)
console.log(res.data)
  })
},[])

const clickActive = ()=>{
  axios.put(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`,{
    status:dataUsers.status,
  }).then((res)=>{
    console.log(res)
   
  })
}



  return (
   <>
   {showUsers.map((item,index)=>{
    return(
    <div key={index}>
      <p>{item.email}</p>
    <p>{item.name}</p>
   <select name="" id="" onChange={(e)=>setDataUsers({...dataUsers,status:e.target.value})}>
    <option value="">تفعيل</option>
    <option value=""> تعطيل</option>
   </select>
    <p>{item.status ? "مفعل":"غير مفعل"}</p> <button  onClick={clickActive}> </button>
  
    </div>)
    

   })}
   </>
  )
}
