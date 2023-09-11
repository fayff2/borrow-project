// import axios from "axios"
// import React from "react"

// type Ishow ={
//   id:string;
//   NId:string;
//   email:string;
//   name:string;
//   password:string;
//   phone:string;
//   status:boolean;
// }

// export default function Admin() {

//   const flag = localStorage.getItem("adminLog");
//   if (!flag) {
//     window.location.href = "/login";
//   }

// const [showUsers , setShowUsers] = React.useState<Ishow[]>([]);
// const [dataUsers , setDataUsers] = React.useState<Ishow>({
//   id:"",
//   NId:"",
//   email:"",
//   name:"",
//   password:"",
//   phone:"",
//   status:false,

// });

// const id = localStorage.getItem("isLogin")


// React.useEffect(()=>{
//   axios.get("https://64f753f19d775408495375aa.mockapi.io/useraccount").then((res)=>{
// setShowUsers(res.data)
// console.log(res.data)
//   })
// },[])

// const clickActive = ()=>{
//   axios.put(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`,{
//     status:dataUsers.status,
//   }).then((res)=>{
//     console.log(res)
   
//   })
// }



//   return (
//    <>
//    {showUsers.map((item,index)=>{
//     return(
//     <div key={index}>
//       <p>{item.email}</p>
//     <p>{item.name}</p>
//    <select name="" id="" onChange={(e)=>setDataUsers({...dataUsers,status:e.target.value})}>
//     <option value="">تفعيل</option>
//     <option value=""> تعطيل</option>
//    </select>
//     <p>{item.status ? "مفعل":"غير مفعل"}</p> <button  onClick={clickActive}> </button>
  
//     </div>)
    

//    })}
//    </>
//   )
// }

import React from "react";
import axios from "axios"
// import React, { useState } from "react"
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


  const flag = localStorage.getItem("adminLog");
  if (!flag) {
    window.location.href = "/login";
  }
  const [showUser , setShowUser]= React.useState<Ishow[]>([])


  React.useEffect(()=>{
    axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/`).then((res)=>{
      console.log(res.data)
      setShowUser(res.data)
    })
  },[setShowUser
  ])
  
  function updateStatus(id , currentState) {
    axios.put(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`, {
      status: !currentState
    })
    .then((res) => {
      const updatedUsers = showUser.map((user) =>
          user.id === id ? { ...user, status: !currentState } : user
        );
        setShowUser(updatedUsers);
      console.log(res.data.status)
    })
    
 
}

// const [fieldValue, setFieldValue] = useState("");

// const handleFieldChange = (e) => {
//   setFieldValue(e.target.value);
// };

  return (
    <>
       
       <div className="flex">
    <div className="lg:w-64">
      <AdminSidebar/>
    </div>
 

    <div className="w-full">
      <h1 className="text-center mt-20 mb-5 text-lg font-bold">حسابات المستخدمين</h1>
      <div className=" flex justify-center flex-col items-center">
      <div className=" flex  gap-24 justify-center bg-card w-5/6">
         <span>الاسم</span>
      <span>الهويه الوطنية</span>
      <span> البريد الالكتروني</span>
      <span>الايبان</span>
      <span>رقم الجوال</span>
      <span>الحاله</span>
  
      </div>


      
    {showUser.map((item)=> (
   
      <div className="flex  gap-24 justify-center border-b py-3 w-5/6" key={item.id}>
        <hr className="text-myPurple"/>

      <div className=" flex gap-10 justify-center w-5/6 items-center" >

      <p>{item.name}</p>
      <p>{item.NId}</p>
      <p>{item.email}</p>
      <p>{item.iBan}</p>
      <p>{item.phone}</p>
      <p>{item.status? "مفعل " :"غير مفعل"}</p>
      </div>
      <button className="button-color" onClick={() =>updateStatus(item.id, item.status)}>تفعيل</button>
      <div>
      <hr className="text-myPurple" />
      </div>
      </div>
))}
</div>
    </div>
    </div>
    </>
  )
}