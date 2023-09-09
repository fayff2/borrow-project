import UserSidebar from "../component/UserSidebar";

export default function Home() {

  const flag = localStorage.getItem("isLogin");
  if (!flag) {
    window.location.href = "/login";
  }


  return (
   <>
   <UserSidebar/>
   

   </>
  )
}
