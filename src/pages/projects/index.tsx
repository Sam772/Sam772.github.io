import React from 'react'
import clash from '../../images/clash.png'
// mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center
const Projects = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <p className='mt-8 text-white text-center text-3xl font-semibold sm:text-4xl'>
          Projects
        </p>
        <div className="flex items-center justify-between h-96">
          <div className="hidden md:block h-56">
            <div className="ml-10 flex items-baseline space-x-20">
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
                <img src={clash} className='rounded-lg w-full' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                  Clash
                </p>
                <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library
                </p>
              </div>
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
              <img src={clash} className='rounded-lg w-full' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                  Discord Bot
                </p>
                <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library
                </p>
              </div>
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
              <img src={clash} className='rounded-lg w-full' alt='clash'/>
                  <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                    Events Website
                  </p>
                  <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between h-96 mt-36">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-20">
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
                <img src={clash} className='rounded-lg w-full' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                  Clash
                </p>
                <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library
                </p>
              </div>
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
                <img src={clash} className='rounded-lg w-full' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                  Discord Bot
                </p>
                <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library
                </p>
              </div>
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
                <img src={clash} className='rounded-lg w-full' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                  Events Website
                </p>
                <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-16'/>
    </div>
  )
}

export default Projects