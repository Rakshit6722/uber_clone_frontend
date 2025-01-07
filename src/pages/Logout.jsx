import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../services/loginService'

const Logout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    logout(navigate,token)

  return (
    <div>
      
    </div>
  )
}

export default Logout
