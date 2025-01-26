import React from 'react'

const WaitingForDriver = ({WaitingForDriver}) => {
  return (
    <div>
      <div>
        {/* <div onClick={() => setVehicleFound(false)} className='flex items-center justify-center absolute right-0 bg-gray-100 rounded-full h-10 w-10 top-6 mr-4'><i className="text-2xl ri-arrow-down-wide-line"></i></div> */}

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
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
