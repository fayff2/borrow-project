import axios from 'axios'
import React from 'react'

type Ishow ={
    id:string;
    NId:string;
    email:string;
    name:string;
    password:string;
    phone:string;
    status:boolean;
  }

export default function UserProfile() {
    const [showUser , setShowUser]= React.useState<Ishow[]>([])

  const id = localStorage.getItem("isLogin")

  React.useEffect(()=>{
    axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`).then((res)=>{
      console.log(res.data)
      setShowUser(res.data)
    })
  },[])
  return (
    <>
       <p>{showUser.name}</p>
        <p>{showUser.id}</p>
        <p>{showUser.status? "مفعل" : "غير مفعل"}</p>
    </>
  )
}
