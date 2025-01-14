import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panel, setPanel] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()

  }

  useGSAP(() => {
    if (panel) {
      gsap.to(panelRef.current, { height: '70%', padding: 20, opacity: 1, duration: 0.5 });
      gsap.to(panelCloseRef.current, { opacity: 1 })
    } else {
      gsap.to(panelRef.current, { height: '0%', padding: 0, opacity: 0, duration: 0.5 });
      gsap.to(panelCloseRef.current, { opacity: 0 })
    }
  }, [panel]);

  return (
    <div className='relative h-screen'>
      <img className='w-16 absolute top-5 left-5' src={import.meta.env.VITE_UBER_LOGO} alt="" />

      <div className="h-screen w-screen">
        {/* Image for temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className="flex flex-col justify-end absolute h-screen top-0 w-full">
        <div className='h-[30%] bg-white p-5 relative'>
          <h5
            ref={panelCloseRef}
            className='absolute top-3 right-3 text-2xl opacity-0'
            onClick={() => setPanel(false)}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={e => submitHandler(e)}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <div>
              <input
                className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
                type="text"
                placeholder='Enter pickup location'
                onChange={e => setPickup(e.target.value)}
                value={pickup}
                onClick={() => setPanel(true)}
              />
            </div>
            <div>
              <input
                className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
                type="text"
                placeholder='Enter drop location'
                onChange={e => setDestination(e.target.value)}
                value={destination}
                onClick={() => setPanel(true)}
              />
            </div>
          </form>
        </div>

        <div ref={panelRef} className={`h-0 bg-white ${panel ? 'block' : 'hidden'} opacity-0`}>
          <LocationPanel />
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Home