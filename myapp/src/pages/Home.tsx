import React from "react";
import UserSidebar from "../component/UserSidebar";
// import Footer from "../component/Footer
import axios from "axios";
import { Breadcrumbs } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


type Iborrow = {
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

 


  React.useEffect(()=>{
    getBorrow ()
},[]);

  const getBorrow =()=>{
    axios.get("https://64fc93ca605a026163aea289.mockapi.io/SendBorrow")
    .then((res)=>{
        console.log(res);
    
    setBorrowData(res.data);
})
}

const checkState =()=>{
  axios.get(`https://64f753f19d775408495375aa.mockapi.io/useraccount/${id}`).then((res)=>{
      console.log(res.data)
      if(res.data.status == true){
       navigate("/borrowrequest")

      }else{
       Swal.fire(" عزيزي المستخدم حسابك غير مفعل الرجاء الانتظار لحين تفعيله من فريق العمل")
      }

     
    })

}



  return (
   <>
   <div className="flex gap-20">
    <div className="lg:w-64">
    <UserSidebar/>
      </div> 

<div className=" w-full mt-20">
<Breadcrumbs>
      <a href="/Home">الرئيسية</a>
    </Breadcrumbs>
    <div className="m-5">
    
    <button className="button-color" onClick={checkState}>طلب</button>
    </div>
  <div className="flex flex-wrap gap-5 mt-10">
    {borrowData.map((item)=>{

return(
  <div className="flex w-72 h-52 bg-card shadow rounded  text-lg ">
    <div className="flex flex-col p-4 gap-4 w-full justify-center">
      <div className=" flex"> <h3>الاسم :</h3> <p>{item.name}</p></div>
      <div className="flex"> <h3>المبلغ :</h3><p>{item.amount}</p></div>
      <div className="flex"> <h3>الدفعات :</h3> <p>{item.package} دفعات</p></div>
      
      <div className="flex"><button className="button-color mx-auto my-0"> تسليف</button></div>
       
  </div>
  </div>
)
    })}
    </div>
    </div>
    </div>

  {/* <div className=" w-72 h-52 bg-card shadow rounded">
  <div className="p-4 flex flex-col">
    
    
    </div>
    </div>

   
  </div>

  </div> */}
  {/* <div className="py-3 border">

<Footer/>
</div> */}
   

   </>
  )
}
