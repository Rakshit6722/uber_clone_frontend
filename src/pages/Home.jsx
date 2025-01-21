import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panel, setPanel] = useState(false)
  // const [active, setActive] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [WaitingForDriver, setWaitingForDriver] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const confirmVehicleRef = useRef(null)
  const vehicleRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const watitingForDriverRef = useRef(null)


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

  useEffect(() => {
    if (vehiclePanel) {
      gsap.to(vehicleRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useEffect(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useEffect(() => {
    if (WaitingForDriver) {
      gsap.to(watitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(watitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [WaitingForDriver])


  useEffect(() => {
    // console.log(confirmRidePanel)
    // console.log(confirmVehicleRef.current)
    if (confirmRidePanel) {
      gsap.to(confirmVehicleRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmVehicleRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  return (
    <div className='relative h-screen overflow-hidden'>
      <img className='w-16 absolute top-5 left-5' src={import.meta.env.VITE_UBER_LOGO} alt="" />

      <div
        className="h-screen w-screen">
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
          <LocationPanel panel={panel} setPanel={setPanel} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div>
        <VehiclePanel vehicleRef={vehicleRef} setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>

      <div>
        <ConfirmRide confirmVehicleRef={confirmVehicleRef} setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef}  className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={watitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <WaitingForDriver WaitingForDriver={WaitingForDriver} />
      </div>
    </div>
  )
}

export default Home