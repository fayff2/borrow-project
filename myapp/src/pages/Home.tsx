

export default function Home() {

  const flag = localStorage.getItem("isLogin");
  if (!flag) {
    window.location.href = "/login";
  }


  return (
   <>
   <h1>home</h1>
   </>
  )
}
