'use client'
import { useState } from 'react';
import Image from 'next/image';
import Logo from "../logo.png";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full pt-10 z-30" data-aos="fade-down">
      <nav className="xl:px-20 lg:px-20 md:px-20 px-5 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <Image
              priority
              src={Logo}
              className="h-22 w-28"
              alt="Follow us on Twitter"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a href="#" className="text-white bg-[#E8375B] transition-all hover:scale-105 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Contact</a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 z-50 rounded-lg lg:hidden hover:scale-105 transition-all"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''} transition-all`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'} transition-all`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`lg:block ${isMenuOpen ? 'absolute left-0 top-0 bg-white w-screen h-screen flex items-center justify-center transition-all' : 'hidden'}`} id="mobile-menu-2">
            <ul className="flex flex-col w-8/12 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
              <li>
                <a href="#service" className="block pr-4 pl-3 text-[#000000b3] hover:text-[#000000] xl:text-sm lg:text-sm text-2xl lg:py-10 py-10 transition-all hover:scale-110" aria-current="page">Service</a>
              </li>
              <li>
                <a href="#offre" className="block pr-4 pl-3 text-[#000000b3] hover:text-[#000000] xl:text-sm lg:text-sm text-2xl lg:py-10 py-10 transition-all hover:scale-110">Offre</a>
              </li>
              <li>
                <a href="#portfolio"  className="block pr-4 pl-3 text-[#000000b3] hover:text-[#000000] xl:text-sm lg:text-sm text-2xl lg:py-10 py-10 transition-all hover:scale-110">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
