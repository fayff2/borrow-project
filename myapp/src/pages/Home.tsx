import UserSidebar from "../component/UserSidebar";
// import Footer from "../component/Footer"

export default function Home() {

  const flag = localStorage.getItem("isLogin");
  if (!flag) {
    window.location.href = "/login";
  }


  return (
   <>
   <div className="flex">
    <div className=" border lg:w-64">
    <UserSidebar/>
      </div> 

  <div className="">
    home
  </div>

  </div>
  {/* <div className="py-3 border">

<Footer/>
</div> */}
   

   </>
  )
}
