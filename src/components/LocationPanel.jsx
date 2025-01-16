import React from 'react'

const LocationPanel = ({ vehiclePanel, setVehiclePanel, panel, setPanel }) => {

    // sample array for location
    const locations = [
        "24B, Near Kapoor's cafe, Bhopal",
        "24B, Near Kapoor's cafe, Bhopal",
        "24B, Near Kapoor's cafe, Bhopal",
        "24B, Near Kapoor's cafe, Bhopal",
    ]

    return (
        <div>

            {
                locations.map((location, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setPanel(false)
                                setVehiclePanel(true)
                            }}
                            className='flex rounded-xl border-2 p-3 active:border-black border-white items-center gap-4 my-2 justify-start'>
                            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill text-xl'></i></h2>
                            <h4 className='font-medium'>{location}</h4>
                        </div>
                    )
                })
            }
            {/* sample data */}
            {/* <div className='flex rounded-xl border-2 p-3 active:border-black border-white items-center gap-4 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill text-xl'></i></h2>
            <h4 className='font-medium'>24B, Near Kapoor's cafe, Bhopal</h4>
        </div>
        <div className='flex rounded-xl border-2 p-3 active:border-black border-white items-center gap-4 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill text-xl'></i></h2>
            <h4 className='font-medium'>24B, Near Kapoor's cafe, Bhopal</h4>
        </div>
        <div className='flex rounded-xl border-2 p-3 active:border-black border-white items-center gap-4 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill text-xl'></i></h2>
            <h4 className='font-medium'>24B, Near Kapoor's cafe, Bhopal</h4>
        </div>
        <div className='flex rounded-xl border-2 p-3 active:border-black border-white items-center gap-4 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill text-xl'></i></h2>
            <h4 className='font-medium'>24B, Near Kapoor's cafe, Bhopal</h4>
        </div> */}
        </div>
    )
}

export default LocationPanel
