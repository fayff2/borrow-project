import { NavbarSide } from "../component/NavbarSide"
import img from '../assets/biglogo2.svg'
import Footer from "../component/Footer"
export default function Start() {
  return (
    <div className="bg-img h-full">
   <NavbarSide/>
    
   <div className="flex justify-center items-center h-screen">
    <div className="flex justify-center  mt-10 h-3/6  ">
<div className=" flex flex-col gap-10 lg:gap-16 max-w-sm lg:max-w-2xl p-10 bg-white  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  text-center items-center">

<div className="">
  <img src={img} alt="" className=" h-36 w-36" />
  </div>
   <div className=" text-xl leading-9">
   هو موقع الكتروني لخدمات الاقتراض للأفراد في جميع انحاء مدن وقرى المملكة العربية السعوديه ، بحيث يطلب الفرد مبلغ اقتراض  ويمكن للمقرض قبول الطلب واتمام عملية الاقتراض  و تنقسم فترات السداد مابين شهرين الى اربع شهور  
   </div>
</div>
</div>
</div>
<div className="py-3 border">

<Footer/>
</div>

    </div>

  )
}
