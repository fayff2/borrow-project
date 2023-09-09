import axios from 'axios'
import React from 'react'
import UserSidebar from '../component/UserSidebar';

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
    <div >
    <UserSidebar/>
    </div>
    <div className='flex justify-center '>
    <div className='container flex border w-96 h-auto' >
        <div className='flex gap-10 mt-10'>
          <div className='border border-black w-12 h-12 rounded-full'>
                <img src="" alt="" />
          </div>
          <div className='flex flex-col gap-2'>
          <p>{showUser.name}</p>
          <p className=' w-auto px-2 h-auto text-center bg-myPurple rounded-sm'>{showUser.status? "مفعل" : "غير مفعل"}</p>
          <hr />
          </div>

        </div>
   
       {/* <p>{showUser.name}</p>
        <p>{showUser.id}</p>
        <p>{showUser.status? "مفعل" : "غير مفعل"}</p> */}
    </div>
    </div>
    </>
  )
}
