import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({ email, password })
        console.log(userData)
    }

    return (
        <div>
            <div className='p-7 h-screen flex flex-col justify-between'>
                <form onSubmit={submitHandler}>
                    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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

                    <p className='text-center'>New here? <Link to='/signup'
                        className='text-blue-600'
                    >
                        Create new Account
                    </Link></p>
                </form>

                <div>
                    <Link to='/captain-login'
                        className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    >
                        Sign in as Captain
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default UserLogin