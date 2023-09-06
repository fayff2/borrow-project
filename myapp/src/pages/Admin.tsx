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
  const [showUser , setShowUser]= React.useState<Ishow[]>([])

  const id = localStorage.getItem("isLogin")

  React.useEffect(()=>{
    axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/`).then((res)=>{
      console.log(res.data)
      setShowUser(res.data)
    })
  },[])

function updateStatus() {
  axios.put(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`, {
    status:true
  })
  .then((res) => {
    console.log(res.data.status)
    setShowUser(res.data)
  })
}


  return (
    <>
    {showUser.map((item)=> (
      
      <>
      <p>{showUser.name}</p>
      <p>{showUser.id}</p>
      <p>{showUser.NID}</p>
      <p>{showUser.email}</p>
      <p>{showUser.phone}</p>
      <p>{showUser.status ? "مفعل" : "غير مفعل"}</p>
      <button onClick={updateStatus}>تفعيل</button>
      </>
    ))}
      
    </>
  )
}