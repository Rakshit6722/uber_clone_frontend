import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { captainLogin } from '../services/captainAuth'
import { captainDataContext } from '../context/CaptainContextProvider'

const CaptainLogin = () => {

    const navigate = useNavigate()
    const {setCaptain} = useContext(captainDataContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = { email, password }
        await captainLogin(captainData, navigate, setCaptain)
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <div>
                <div className='p-7 h-screen flex flex-col justify-between'>
                    <form onSubmit={submitHandler}>
                        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                        <input
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='email@example.com'
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />

                        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                        <input
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='password'
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        />

                        <button
                            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        >
                            Login
                        </button>

                        <p className='text-center'>Join a Fleet? <Link to='/captain-signup'
                            className='text-blue-600'
                        >
                            Register as a Captain
                        </Link></p>
                    </form>

                    <div>
                        <Link to='/login'
                            className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                        >
                            Sign in as User
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CaptainLogin