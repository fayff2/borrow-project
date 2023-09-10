// import axios from 'axios'
// import React from 'react'

// type Ishow ={
//     id:string;
//     NId:string;
//     email:string;
//     name:string;
//     password:string;
//     phone:string;
//     status:boolean;
//   }

// export default function UserProfile() {
//     const [showUser , setShowUser]= React.useState<Ishow[]>([])

//   const id = localStorage.getItem("isLogin")

//   React.useEffect(()=>{
//     axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`).then((res)=>{
//       console.log(res.data)
//       setShowUser(res.data)
//     })
//   },[])
//   return (
//     <>
//        <p>{showUser.name}</p>
//         <p>{showUser.id}</p>
//         <p>{showUser.status? "مفعل" : "غير مفعل"}</p>
//     </>
//   )
// }




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
    iBan:string
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
    <div className='flex  justify-center '>
      <div className='container flex  w-96 h-auto mt-10' >
        <div className='flex flex-col gap-5'>
          <div className='flex gap-10 mt-10'>
             <div className=''>
                <img className='w-16' src="./Male User.png" alt="" />
             </div>
             <div className='flex flex-col gap-2'>
               <p>{showUser.name}</p>
               <p className=' w-auto px-2 h-auto text-center bg-myPurple rounded-sm'>{showUser.status? "مفعل" : "غير مفعل"}</p>
             </div>
          </div>
          <hr />             
          <div className='flex flex-col mr-2 gap-2' >
            <label htmlFor="">البريد الإلكتروني</label>
            <input className='border border-myPurple w-96'
             type="text"
             value={showUser.email} />
             <label htmlFor="">السجل المدني</label>
            <input className='border border-myPurple w-96'
             type="text"
             value={showUser.NId} />
             <label htmlFor="">رقم الجوال</label>
            <input className='border border-myPurple w-96'
             type="text"
             value={showUser.phone} />
             <label htmlFor="">ايبان</label>
            <input className='border border-myPurple w-96'
             type="text"
             value={showUser.iBan} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
