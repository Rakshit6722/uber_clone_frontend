import React from 'react'

const ConfirmRide = ({ confirmVehicleRef, setConfirmRidePanel }) => {
    return (
        <div>
            <div ref={confirmVehicleRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white py-8'>
                <div onClick={() => setConfirmRidePanel(false)} className='flex items-center justify-center absolute right-0 bg-gray-100 rounded-full h-10 w-10 top-6 mr-4'><i className="text-2xl ri-arrow-down-wide-line"></i></div>
                <h3 className='text-2xl font-semibold mb-5 px-4'>
                    Confirm your Ride
                </h3>

                <div className='flex justify-between flex-col items-center gap-5'>
                    <img
                        className='h-24 mb-5'
                        src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png'
                        alt=''
                    />
                    <div className='w-full flex flex-col gap-3 border-gray-300'>
                        <div className='flex items-center border-b-2 gap-5'>
                            <i className='text-xl ri-map-pin-2-fill ml-3'></i>
                            <div className='flex flex-col gap-3 w-full px-2 py-1'>
                                <h3 className='text-xl font-semibold'>562/11-A</h3>
                                <p className='text-base text-gray-600 -mt-1'>Shivaji Nagar, Delhi</p>
                            </div>
                        </div>
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
                    <button className='w-2/3 bg-green-600 font-semibold text-white p-2 rounded-lg'>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRide
