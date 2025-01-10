import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { captainLogout } from '../services/captainAuth'

const CaptainLogout = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        captainLogout(navigate, token)
    },[])

  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout
