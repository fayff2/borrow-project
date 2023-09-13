
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
  
  function updateStatus(id: string , currentState: boolean) {
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
       
       <div className="lg:flex lg:gap-20 bg-img-header h-screen text-lg">
    <div className="lg:w-64 shadow-md">
      <AdminSidebar/>
    </div>

    <div className="w-full mt-10 ml-5 text-lg">
      <h1 className="text-center mt-20 mb-5 text-2xl lg:text-3xl font-bold">حسابات المستخدمين</h1>
      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
      <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  الاسم
                    </th>
                <th scope="col" className="px-6 py-3">
                    الهوية الوطنية
                </th>
                <th scope="col" className="px-6 py-3">
                    البريد الالكتروني
                </th>
                <th scope="col" className="px-6 py-3">
                    الايبان
                </th>

                <th scope="col" className="px-6 py-3">
                    رقم الجوال
                </th>
                <th scope="col" className="px-6 py-3">
                    الحالة
                </th>
                <th scope="col" className="px-6 py-3">
                    الاجراء
                </th>
            </tr>
        </thead>


        <tbody>
      
    {showUser.map((item)=> (
   
      <tr className=" text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
  

  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
  <p>{item.name}</p>
    </th>
    <td className="px-6 py-4">
    <p>{item.NId}</p>
    </td>
    <td className="px-6 py-4">
    <p>{item.email}</p>
    </td>
    <td className="px-6 py-4">
    <p>{item.iBan}</p>
    </td>
    <td className="px-6 py-4">
    <p>{item.phone}</p>
    </td>
    <td className="px-6 py-4">
    <p>{item.status? "مفعل " :"غير مفعل"}</p>
    </td>
    <td className="px-6 py-4">
      
    <button className="button-color" onClick={() =>updateStatus(item.id, item.status)}>تفعيل</button>
    </td>
     
      </tr>
))}
</tbody>
</table>

</div>



    </div>
    </div>
    </>
  )
}