import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
                      <Link to ="/projects" className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                        Projects
                      </Link>
                    </div>
                    <div className='group [transform:translateZ(0)] px-4 py-2 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-slate-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500'>
                      <Link to ="/contact" className="relative z-0 text-black group-hover:text-gray-400 transition ease-in-out duration-500">
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                </button>
              </div>
            </div>
          </div>
          <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to ="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>
                <Link to ="/projects" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Projects
                </Link>
                <Link to ="/contact" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                        Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    );
  }

export default Navbar;
