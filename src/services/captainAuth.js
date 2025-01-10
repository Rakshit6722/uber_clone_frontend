import { captainApi } from "./api.js"
import apiConnector from "./apiConnector.js"
import { toast } from 'react-toastify'

export const registerCaptain = async (userData, navigate, setCaptain) => {
    try {
        const response = await apiConnector("POST", captainApi.register, {
            fullname: {
                firstname: userData.fullName.firstName,
                lastname: userData.fullName.lastName
            },
            email: userData.email,
            password: userData.password,
            vehicle:{
                color: userData.vehicle.color,
                plate: userData.vehicle.plate,
                capacity: userData.vehicle.capacity,
                vehicleType: userData.vehicle.type
            }
        })
        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            localStorage.setItem('captain', JSON.stringify(data.captain))
            toast.success('Registration successful!')
            navigate('/captain-home')
        }
    } catch (err) {
        console.log(err)
        toast.error(err.response?.data?.message || 'Registration failed. Please try again.')
    }
}

export const captainLogin = async (userData, navigate, setCaptain) => {
    try{
        const response = await apiConnector("POST", captainApi.login, userData)
        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            localStorage.setItem('captain', JSON.stringify(data.captain))
            toast.success('Login successful!')
            navigate('/captain-home')
        }
    }catch(err){
        console.log(err)
        toast.error(err.response?.data?.message || 'Login failed. Please try again.')
    }
}

export const captainLogout = async (navigate, token) => {
    try{
        // const response = await apiConnector("POST", captainApi.logout, null, {
        //     Authorization: `Bearer ${token}`
        // })
        // if(response.status === 200){
        //     navigate('/captain-login')
        //     toast.success('Logout successful!')
        //     localStorage.removeItem('token')
        // }else{
        //     toast.error('Logout failed. Please try again.')
        // }
        localStorage.removeItem('token')
        navigate('/captain-login')

    }catch(err){
        console.log(err)
        toast.error(err.response?.data?.message || 'Logout failed. Please try again.')
    }
}

