import React from 'react'
import clash from '../../images/clash.png'

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
              <div>
                <img src={clash} className='relative z-0 w-5/6 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                <p className="text-white py-3 px-20">
                  Clash
                </p>
              </div>
              <div>
                <img src={clash} className='relative z-0 w-5/6 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                <p className="text-white py-3 px-14">
                  Discord Bot
                </p>
              </div>
              <div>
                <img src={clash} className='relative z-0 w-5/6 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                  <p className="text-white py-3 px-14">
                    Clash
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects