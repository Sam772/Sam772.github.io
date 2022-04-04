import React from 'react'
import clash from '../../images/clash.png'
import bot from '../../images/bot.png'
import events from '../../images/events.png'
import portfolio from '../../images/portfolio.png'
import blank from '../../images/blank.png'

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
                <img src={clash} className='rounded-lg w-full h-64' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                  Clash
                </p>
                <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library
                </p>
              </div>
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
              <img src={bot} className='rounded-lg w-full h-64' alt='clash'/>
                <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                  Discord Music Bot
                </p>
                <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                  A discord bot created with discord.js for listening to music, containing several commands
                </p>
              </div>
              <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
              <img src={events} className='rounded-lg w-full h-64' alt='clash'/>
                  <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                    Events Website
                  </p>
                  <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                    A website created to book aston events, created with html, css, bootstrap, javascript, sql and php
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between h-96 mt-36">
          <div className="ml-10 flex items-baseline space-x-20">
            <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
              <img src={portfolio} className='rounded-lg w-full h-64' alt='clash'/>
              <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                Portfolio Website
              </p>
              <p className="text-white text-1xl font-semibold text-center mx-2 mb-2">
                A website created with react, typescript and tailwind css
              </p>
            </div>
            <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
              <img src={blank} className='rounded-lg w-full h-64' alt='clash'/>
              <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                [INSERT TITLE]
              </p>
              <p className="text-white text-1xl font-semibold text-center mx-2 mb-8">
              [INSERT TEXT]
              </p>
            </div>
            <div className='bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 relative z-0 w-4/6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'>
              <img src={blank} className='rounded-lg w-full h-64' alt='clash'/>
              <p className="text-white text-2xl font-semibold py-3 w-full text-center">
                [INSERT TITLE]
              </p>
              <p className="text-white text-1xl font-semibold text-center mx-2 mb-8">
                [INSERT TEXT]
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-16'/>
    </div>
  )
}

export default Projects