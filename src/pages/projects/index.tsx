import React from 'react'

const Projects = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <p className='mt-8 text-white text-center text-3xl font-semibold sm:text-4xl'>
            Projects
          </p>
          <div className="flex items-center justify-between h-96">
            <div className="flex items-center">
              <div className="hidden md:block h-56">
                <div className="ml-10 flex items-baseline space-x-20">
                  <div className='px-20 py-36 bg-gray-200 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
                    <p className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                      Project 1
                    </p>
                  </div>
                  <div className='px-20 py-36 bg-gray-200 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
                    <p className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                      Project 2
                    </p>
                  </div>
                  <div className='px-20 py-36 bg-gray-200 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
                    <p className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                      Project 3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects