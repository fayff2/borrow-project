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

import axios from "axios"
import React, { useState } from "react"
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
    .catch((error) => {
      console.error("Error updating user state:", error);
    });
 
}

const [fieldValue, setFieldValue] = useState("");

const handleFieldChange = (e) => {
  setFieldValue(e.target.value);
};

  return (
    <>
       
       <div className="flex">
    <div className="lg:w-64">
      <AdminSidebar/>
    </div>
 

    <div className="w-full">
      <h1 className="text-center mt-20">حسابات المستخدمين</h1>
      <div className=" flex gap-10 justify-center"> <span>الاسم</span>
      <span> البريد الالكتروني</span>
      <span>الايبان</span>
      <span>الهويه الوطنية</span>
      <span>رقم الجوال</span>
      <span>الحاله</span>
  
      </div>

      
    {Array.isArray(showUser) &&showUser.map((item)=> (
   
      <div className="flex flex-col" key={item.id}>
        <hr className="text-myPurple"/>

      <div className="flex gap-3 mb-10 text-sm mr-2 justify-center" >
        <div className="grid grid-cols-3 items-center gap-2 ">
        <div className="flex flex-col">  
        
      <input 
      className=""
       type="text"
       value={item.name}
       onChange={handleFieldChange}
        />
        </div>
        <div className="flex flex-col"> 
 
      <input 
      className=""
       type="text"
       value={item.email}
       onChange={handleFieldChange}
        />
        </div>
        <div className="flex flex-col">  
      
      <input 
      className=""
       type="text"
       value={item.iBan}
       onChange={handleFieldChange}
        />
        </div>
        <div className="flex flex-col">  
       
      <input 
      className=""
       type="text"
       value={item.NId}
       onChange={handleFieldChange}
        />
        </div>


        <div className="flex flex-col">  
 
      <input 
      className=""
       type="text"
       value={item.phone}
       onChange={handleFieldChange}
        />
        </div>


        <div className="flex flex-col">  
         
      <input 
      className=""
       type="text"
       value={item.status? "غير مفعل" : "مفعل"}
       onChange={handleFieldChange}
        />
        </div> 
      </div>
      <button className=" bg-myPurple w-auto mt-3 " onClick={() =>updateStatus(item.id, item.status)}>تفعيل</button>
      </div>
      <div>
      <hr className="text-myPurple" />
      </div>
      </div>
      
      // <p>{item.status ? "مفعل" : "غير مفعل"}</p>
))}
    </div>
    </div>
    </>
  )
}