
import React from "react";
import axios from "axios"
// import React, { useState } from "react"
import AdminSidebar from "../component/AdminSidebar";
import userimg from "../assets/149071.png"
import Footer from "../component/Footer";

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
   
      setShowUser(res.data)
    })
  },[setShowUser
  ])
  
  function updateStatus(id: string , currentState: boolean) {
    axios.put(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`, {
      status: !currentState
    })
    .then(() => {
      const updatedUsers = showUser.map((user) =>
          user.id === id ? { ...user, status: !currentState } : user
        );
        setShowUser(updatedUsers);
      // console.log(res.data.status)
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

    <div>
  
  <div className=" w-full p-4 flex flex-col lg:flex-row items-center lg:justify-between lg:gap-20 bg-white  border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col lg:flex-row text-center items-center w-6/12 gap-5 ">
      <img src={userimg} alt="" className="w-20 h-20"/>
      <div className="">
      <span className="font-bold   text-center text-2xl">  مرحباً بك admin   <span className=" text-2xl font-extrabold text-blue-950 mr-2"></span> </span>
      </div>
    
    </div>
      
  
      <div className=" w-6/12  flex justify-center items-center">
     
    <div className="relative flex w-96 flex-wrap items-stretch">
      <input
        type="search"
        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-blue-900 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="البحث"
        aria-label="Search"
        aria-describedby="button-addon3" />
  
    </div>
  
          
      </div>
  </div>
  
  </div>
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
      
    <button className="button-color w-20" onClick={() =>updateStatus(item.id, item.status)}>تفعيل</button>
    </td>
     
      </tr>
))}
</tbody>
</table>

</div>



    </div>
    </div>
    <div className="bg-dark-blue w-full h-10 flex justify-center items-center text-center">
      <Footer/>
    </div>
    </>
  )
}