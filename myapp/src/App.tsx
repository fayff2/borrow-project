import './App.css'
import {Routes , Route} from 'react-router-dom'
import Rigster from './pages/Rigster'
import Login from './pages/Login'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import Admin from './pages/Admin'
import Start from './pages/Start'
import UserDetails from './pages/UserDetails'
import BorrowRequest from './pages/BorrowRequest'
import SendBorrow from './pages/SendBorrow'

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
      <Route path='/userdetails' element={<UserDetails/>}></Route>
      <Route path='/borrowrequest' element={<BorrowRequest/>}></Route>
      <Route path='/sendborrow/:id' element={<SendBorrow/>}></Route>
    </Routes>
   </>
  )
}

export default App