
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Rigster from './pages/Rigster'
import Login from './pages/Login'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import Admin from './pages/Admin'
import Start from './pages/Start'
import BorrowRequest from './pages/BorrowRequest'
import AdminBorrowR from './pages/AdminBorrowR' 
import SendBorrow from './pages/SendBorrow'
import Payment from './pages/Payment'
// import Invoice from './pages/Invoice'
function App() {


  return (
   <>
    <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/rigster' element={<Rigster/>}></Route> 
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/userProfile' element={<UserProfile/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/borrowrequest' element={<BorrowRequest/>}></Route>
      <Route path='/adminborrowreq' element={<AdminBorrowR/>}></Route>
      <Route path='/SendBorrow/:id' element={<SendBorrow/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      {/* <Route path='/invoice/:id' element={<Invoice/>}></Route> */}

    </Routes>
   </>
  )
}

export default App
