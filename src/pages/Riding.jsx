import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link
                to='/home'
                className='fixed h-10 w-10 bg-white rounded-full top-6 right-6 flex items-center justify-center cursor-pointer'>
                <i className='text-xl ri-home-5-line'></i>
            </Link>    
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src={import.meta.env.VITE_UBER_MAP} alt="" />
            </div>
            <div className='h-1/2 p-5 flex flex-col justify-between'>
                <div className='flex items-center justify-between'>
                    <img
                        className='h-12'
                        src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png'
                        alt=''
                    />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP15 DH1411</h4>
                        <p className='text-sm text-gray-600'>Toyota Fortuner</p>
                    </div>
                </div>

                <div className='flex justify-between flex-col items-center gap-5'>
                    <div className='w-full flex flex-col gap-3 border-gray-300'>
                        <div>
                            <div className='flex items-center gap-5 border-b-2'>
                                <i className='text-xl ri-map-pin-user-fill ml-3'></i>
                                <div className='flex flex-col gap-3 w-full px-2 py-1'>
                                    <h3 className='text-lg font-semibold'>Third Wave Coffee</h3>
                                    <p className='text-base text-gray-600 -mt-1'>Shivaji Nagar, Delhi</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-5'>
                                <i className='text-xl ri-currency-line ml-3'></i>
                                <div className='flex flex-col gap-3 w-full px-2 py-1'>
                                    <h3 className='text-lg font-semibold'>₹193.20</h3>
                                    <p className='text-base text-gray-600 -mt-1'>Cash Cash</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='w-2/3 bg-green-600 font-semibold text-white p-2 rounded-lg'>Make a Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Riding
