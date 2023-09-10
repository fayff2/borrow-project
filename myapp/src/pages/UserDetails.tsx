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

export default function UserDetails() {
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
      <div>
        <AdminSidebar/>
      </div>
      
      <div className="flex justify-end ml-20 mt-10 ">
  
      <div>
        <h1 className="text-center mb-5  bg-myPurple">حسابات المستخدمين</h1>
        
      {Array.isArray(showUser) &&showUser.map((item)=> (
        <div className="flex flex-col  " key={item.id}>
          <hr className="text-myPurple"/>
        <div className="flex gap-3 mb-10 text-sm mr-2 justify-center" >
          <div className="grid grid-cols-3 items-center gap-2 ">
          <div className="flex flex-col">  
          <label htmlFor="">الاسم</label> 
        <input 
        className="border w-auto border-myPurple"
         type="text"
         value={item.name}
         onChange={handleFieldChange}
          />
          </div>
          <div className="flex flex-col">  
          <label htmlFor="">الإيميل</label> 
        <input 
        className="border w-auto border-myPurple"
         type="text"
         value={item.email}
         onChange={handleFieldChange}
          />
          </div>
          <div className="flex flex-col">  
          <label htmlFor="">الايبان</label> 
        <input 
        className="border w-auto border-myPurple"
         type="text"
         value={item.iBan}
         onChange={handleFieldChange}
          />
          </div>
          <div className="flex flex-col">  
          <label htmlFor="">الهوية</label> 
        <input 
        className="border w-auto border-myPurple"
         type="text"
         value={item.NId}
         onChange={handleFieldChange}
          />
          </div>
          <div className="flex flex-col">  
          <label htmlFor="">الجوال</label> 
        <input 
        className="border w-auto border-myPurple"
         type="text"
         value={item.phone}
         onChange={handleFieldChange}
          />
          </div>
          <div className="flex flex-col">  
          <label htmlFor="">الحالة</label> 
        <input 
        className="border w-auto border-myPurple"
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
