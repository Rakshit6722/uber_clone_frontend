import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if(!token || !user){
            navigate('/login')
        }
    },[token,navigate])

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectedWrapper
