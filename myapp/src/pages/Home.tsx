import React from "react";
import UserSidebar from "../component/UserSidebar";
import Footer from "../component/Footer"
import axios from "axios";
import { Breadcrumbs } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import userimg from '../assets/user.svg'


type Iborrow = {
  id:string;
  name : string;
  amount: number;
  package: string;

}



export default function Home() {

  const flag = localStorage.getItem("isLogin");
  if (!flag) {
    window.location.href = "/login";
  }

  const [borrowData , setBorrowData] = React.useState <Iborrow[]>([])

  


  const id = localStorage.getItem("isLogin")
  const navigate = useNavigate()
  
const name = localStorage.getItem("name");
 


  React.useEffect(()=>{
    getBorrow ()
},[]);

  const getBorrow =()=>{
    axios.get("https://64fc93ca605a026163aea289.mockapi.io/SendBorrow")
    .then((res)=>{
        // console.log(res);
    
    setBorrowData(res.data);
})
}

const checkState =()=>{
  axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`).then((res)=>{
      // console.log(res.data)
      if(res.data.status == true){
       navigate("/borrowrequest")

      }else{
       Swal.fire(" عزيزي المستخدم حسابك غير مفعل الرجاء الانتظار لحين تفعيله من فريق العمل")
      }

     
    })

}



  return (
   <>
   <div className="lg:flex lg:gap-20 bg-img-header h-full lg:h-screen xl: py-10 overflow-scroll">
    <div className="lg:w-64 shadow-md">
      
    <UserSidebar/>
      </div> 

<div className=" w-full mt-10 ml-5">

<div>
  
<div className=" w-full p-4 flex flex-col lg:flex-row items-center lg:justify-between lg:gap-20 bg-white  border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col lg:flex-row text-center items-center w-6/12 gap-5 ">
    <img src={userimg} alt="" className="w-20 h-20"/>
    <div className="">
    <span className="font-bold   text-center text-2xl"> مرحباً بك    <span className=" text-2xl font-extrabold text-blue-950 mr-2">{name}</span> </span>
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
<Breadcrumbs>
      <a href="/Home" className=" mt-10 mr-28 text-lg">الرئيسية</a>
    </Breadcrumbs>
    <div className=" mt-5 mr-1">
    
    <button className="button-dark-blue w-32 h-10 rounded-md mr-28" onClick={checkState}>طلب</button>
    </div>
  <div className="flex flex-wrap  justify-center items-center gap-5 mt-10 w-full p-4">


    {borrowData.map((item)=>{

return(
  <div className="flex w-72 h-52 bg-card shadow rounded  text-lg ">
    <div className="flex flex-col p-4 gap-4 w-full justify-center">
      <div className=" flex"> <h3>الاسم :</h3> <p>{item.name}</p></div>
      <div className="flex"> <h3>المبلغ :</h3><p>{item.amount}</p></div>
      <div className="flex"> <h3>الدفعات :</h3> <p>{item.package} دفعات</p></div>
      
      <Link to={`/SendBorrow/${item.id}`}>
      <div className="flex"><button className="button-color mx-auto my-0"> تسليف</button></div></Link>
       
  </div>
  </div>
)
    })}
    </div>
    </div>
    
    </div>

    <div className="bg-dark-blue w-full h-10 flex justify-center items-center text-center">
      <Footer/>
    </div>

  
   

   </>
  )
}
