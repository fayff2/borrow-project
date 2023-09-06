
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Rigster from './pages/Rigster'
import Login from './pages/Login'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'

function App() {


  return (
   <>
    <Routes>
      <Route path='/' element={<Rigster/>}></Route> 
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/userProfile' element={<UserProfile/>}></Route>
    </Routes>
   </>
  )
}

export default App
