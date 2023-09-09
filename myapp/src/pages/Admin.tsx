import axios from "axios"
import React from "react"
import AdminSidebar from "../component/AdminSidebar";

type Ishow ={
  id:string;
  NId:string;
  email:string;
  name:string;
  password:string;
  phone:string;
  status:boolean;
  iBan:string
}

export default function Admin() {
  const [showUser , setShowUser]= React.useState<Ishow[]>([])

  const id = localStorage.getItem("isLogin")

  React.useEffect(()=>{
    axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/`).then((res)=>{
      console.log(res.data)
      setShowUser(res.data)
    })
  },[setShowUser])

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
    <div>
      <AdminSidebar/>
    </div>
    <div className="flex justify-end ml-3 mt-2">
    <div>
      <div className="flex gap-16 mb-1 ml-2 border bg-cc">
      <label htmlFor="">الاسم</label> 
      <label htmlFor="">الإيميل</label> 
      <label htmlFor="">ايبان</label> 
      <label htmlFor="">الهوية</label> 
      <label htmlFor="">الجوال</label> 
      <label htmlFor="">الحالة</label> 
      <label htmlFor="">التفعيل</label> 
      </div>
    {showUser.map((item)=> (
      <div className="flex flex-col ga">
      <div className="flex gap-3 mb-1 text-sm mr-2" key={item.id}>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.iBan}</p>
      <p>{item.NId}</p>
      <p>{item.phone}</p>
      <p>{item.status ? "مفعل" : "غير مفعل"}</p>
      <button className="border border-black w-auto" onClick={updateStatus}>تفعيل</button>
      </div>
      <div>
      <hr />
      </div>
      </div>
      
))}
    </div>
    </div>
    </>
  )
}