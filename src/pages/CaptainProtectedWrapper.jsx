import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainProtectedWrapper = ({ children }) => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const captain = JSON.parse(localStorage.getItem('captain'))

    useEffect(()=>{
        if(!token || !captain){
            navigate('/captain-login')
        }
    },[token,navigate])

    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectedWrapper
