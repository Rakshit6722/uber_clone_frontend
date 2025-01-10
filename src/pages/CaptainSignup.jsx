import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerCaptain } from '../services/captainAuth.js'
import { captainDataContext } from '../context/CaptainContextProvider.jsx'

const CaptainSignup = () => {

    const navigate = useNavigate()
    const {setCaptain} = useContext(captainDataContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
          fullName: {
            firstName,
            lastName,
          },
          email,
          password,
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            type: vehicleType
          }
        };

        await registerCaptain(captainData, navigate, setCaptain)

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }

    return (
        <div>
            <div>
                <div>
                    <div className='p-7 h-screen flex flex-col justify-between'>
                        <form onSubmit={submitHandler}>
                            <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

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



                            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                            <div className='flex gap-4 mb-5'>
                                <input
                                    required
                                    value={vehicleColor}
                                    onChange={(e) => setVehicleColor(e.target.value)}
                                    placeholder='Vehicle Color'
                                    type="text"
                                    className='bg-[#eeeeee] rounded px-4 w-[50%] py-2 border text-lg placeholder:text-base'
                                />
                                <input
                                    required
                                    value={vehiclePlate}
                                    onChange={(e) => setVehiclePlate(e.target.value)}
                                    placeholder='License Plate'
                                    type="text"
                                    className='bg-[#eeeeee] rounded px-4 py-2 w-[50%] border text-lg placeholder:text-base'
                                />
                            </div>

                            <div className='flex gap-4 mb-5'>
                                <input
                                    required
                                    value={vehicleCapacity}
                                    onChange={(e) => setVehicleCapacity(e.target.value)}
                                    placeholder='Passenger Capacity'
                                    type="number"
                                    className='bg-[#eeeeee] rounded px-4 w-[50%] py-2 border text-lg placeholder:text-base'
                                />
                                <select
                                    required
                                    value={vehicleType}
                                    onChange={(e) => setVehicleType(e.target.value)}
                                    className='bg-[#eeeeee] rounded px-3 py-1.5 w-[50%] border text-sm'
                                >
                                    <option value="">Vehicle Type</option>
                                    <option value="car">Car</option>
                                    <option value="bike">Bike</option>
                                    <option value="auto">Auto</option>
                                </select>
                            </div>

                            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                            <input
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder='password'
                                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            />

                            <button
                                className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            >
                                Create Account
                            </button>

                            <p className='text-center'>Already have an account? <Link to='/captain-login'
                                className='text-blue-600'
                            >
                                Login here
                            </Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CaptainSignup