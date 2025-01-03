import apiConnector from "./apiConnector"
import { userApi } from "./api"
import { UserDataContext } from "../context/UserContext"
import { toast } from 'react-toastify'

export const register = async (userData, navigate, setUser) => {
    try {
        const response = await apiConnector("POST", userApi.register, {
            fullname: {
                firstname: userData.fullName.firstName,
                lastname: userData.fullName.lastName
            },
            email: userData.email,
            password: userData.password
        })
        if (response.status === 201) {
            const data = response.data
            setUser(data.user)
            toast.success('Registration successful!')
            navigate('/home')
        }
    } catch (err) {
        console.log(err)
        toast.error(err.response?.data?.message || 'Registration failed. Please try again.')
    }
}

export const login = async (userData, navigate, setUser) => {
    try{
        const response = await apiConnector("POST", userApi.login, userData)
        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            toast.success('Login successful!')
            navigate('/home')
        }
    }catch(err){
        console.log(err)
        toast.error(err.response?.data?.message || 'Login failed. Please try again.')
    }
}
