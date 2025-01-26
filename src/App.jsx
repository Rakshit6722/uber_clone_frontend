import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import Start from './pages/Start'
import Logout from './pages/Logout'
import CaptainLogout from './pages/CaptainLogout'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/riding' element={<UserProtectedWrapper><Riding/></UserProtectedWrapper>} />
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
        <Route path='/user/logout' element={<UserProtectedWrapper><Logout/></UserProtectedWrapper>}/>
        <Route path='/captain/logout' element={<CaptainProtectedWrapper><CaptainLogout/></CaptainProtectedWrapper>}/>
        <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
