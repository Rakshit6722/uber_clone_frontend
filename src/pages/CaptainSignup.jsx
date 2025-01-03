import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(firstName, lastName, email, password)

        const updatedUserData = {
          fullName: {
            firstName,
            lastName,
          },
          email,
          password,
        };
    
        setUserData(updatedUserData);
    
        console.log('User Data Submitted:', updatedUserData);

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <div>
                <div>
                    <div className='p-7 h-screen flex flex-col justify-between'>
                        <form onSubmit={submitHandler}>
                            <img className='w-16 mb-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                            <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                            <div className='flex gap-4 mb-5'>
                                <input
                                    required
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                    placeholder='firstname'
                                    type="text"
                                    className='bg-[#eeeeee]  rounded px-4 w-[50%] py-2 border text-lg placeholder:text-base'
                                />
                                <input
                                    required
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder='lastname'
                                    type="text"
                                    className='bg-[#eeeeee]  rounded px-4 py-2 w-[50%] border text-lg placeholder:text-base'
                                />
                            </div>

                            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                            <input
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder='email@example.com'
                                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />

                            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                            <input
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder='password'
                                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            />

                            <button
                                className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            >
                                Create Account
                            </button>

                            <p className='text-center'>Already have an account? <Link to='/captain-login'
                                className='text-blue-600'
                            >
                                Login here
                            </Link></p>
                        </form>

                        <div>
                            <p className='text-[10px] leading-tight text-gray-500'>
                                By proceeding, you consent to get calls, WhatsApp or
                                SMS from Uber for account and service related purposes.
                                Get to know more about how we process your data and
                                protect your privacy.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CaptainSignup