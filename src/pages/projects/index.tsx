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
                <img src={clash} className='relative z-0 w-5/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-5/6 text-center">
                  Clash
                </p>
              </div>
              <div>
                <img src={clash} className='relative z-0 w-5/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-5/6 text-center">
                  Discord Bot
                </p>
              </div>
              <div>
                <img src={clash} className='relative z-0 w-5/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                  <p className="text-white text-2xl font-semibold py-3 w-5/6 text-center">
                    Events Website
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between h-80">
          <div className="hidden md:block h-56">
            <div className="ml-10 flex items-baseline space-x-20">
              <div>
                <img src={clash} className='relative z-0 w-5/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-5/6 text-center">
                  Clash
                </p>
              </div>
              <div>
                <img src={clash} className='relative z-0 w-5/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-5/6 text-center">
                  Discord Bot
                </p>
              </div>
              <div>
                <img src={clash} className='relative z-0 w-5/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200' alt='clash'/>
                  <p className="text-white text-2xl font-semibold py-3 w-5/6 text-center">
                    Events Website
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