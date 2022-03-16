import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-6">
                    <div className='group [transform:translateZ(0)] px-4 py-2 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-slate-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500'>
                      <Link to ="/" className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                        Home
                      </Link>
                    </div>
                    <div className='group [transform:translateZ(0)] px-4 py-2 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-slate-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500'>
                      <Link to ="/about" className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                        About
                      </Link>
                    </div>
                    <div className='group [transform:translateZ(0)] px-4 py-2 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-slate-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500'>
                      <Link to ="/projects" className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                        Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                </button>
              </div>
            </div>
          </div>
      </div>
    );
  }

export default Navbar;
