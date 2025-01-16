import React from 'react'

const VehiclePanel = ({ vehicleRef, setVehiclePanel, setConfirmRidePanel }) => {
    return (
        <div>
            <div ref={vehicleRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 bg-white py-6'>
                <div onClick={() => setVehiclePanel(false)} className='absolute right-0 mr-4'><i className="text-2xl ri-arrow-down-wide-line"></i></div>
                <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
                <div
                    onClick={() => setConfirmRidePanel(true)}
                    className='flex border-2  active:border-black bg-gray-100 mb-2 rounded-xl p-3 items-center justify-between'>
                    <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt='' />
                    <div className='-600 w-1/2'>
                        <h4 className='font font-medium text-lg'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
                        <h5>2 mins away</h5>
                        <p className='font font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹193.20</h2>
                </div>
                <div
                    onClick={() => setConfirmRidePanel(true)}
                    className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl p-3 items-center justify-between'>
                    <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt='' />
                    <div className='-600 w-1/2'>
                        <h4 className='font font-medium text-lg'>Moto <span><i className="ri-user-3-fill">1</i></span></h4>
                        <h5>3 mins away</h5>
                        <p className='font font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹65.17</h2>
                </div>
                <div
                    onClick={() => {
                        setConfirmRidePanel(true)
                    }}
                    className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl p-3 items-center justify-between'>
                    <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt='' />
                    <div className='-600 w-1/2'>
                        <h4 className='font font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill">3</i></span></h4>
                        <h5>2 mins away</h5>
                    </div>
                    <h2 className='text-lg font-semibold'>₹118.68</h2>
                </div>
            </div>
        </div>
    )
}

export default VehiclePanel
