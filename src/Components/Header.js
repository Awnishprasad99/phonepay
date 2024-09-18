import React, { useState } from "react";
import logo from "../asset/feepass.png";
import lo from "../asset/logo.png";
import man from "../asset/Retail.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white py-1 flex flex-wrap items-center justify-between">
        <div className="ml-4 md:ml-10 pt-5 flex items-center">
          <span className="w-14 inline-block">
            <img src={lo} alt="" />
          </span>
          <span className="inline-block w-36 ml-2 mb-2">
            <img src={logo} alt="" />
          </span>
        </div>
        
        {/* Hamburger menu button */}
        <button
          className="md:hidden px-2 py-1 mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation items */}
        <div className={`w-full md:w-auto md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 p-4 md:p-0">
            <li>Home</li>
            <li>Solution</li>
            <li>Marketing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end pl-0 md:pl-32 pt-4 md:pt-0">
          <button className="border-red-500 border-2 rounded-md h-9 px-3">
            Get Started (Merchant Application)
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between bg-gradient-to-tr w-full from-[#011b06]">
        <div className="text-4xl md:text-7xl pl-4 md:pl-10 pt-10">
          <span className="flex space-x-2 md:space-x-5">
            <h1 className="text-white">We</h1>
            <h1 className="text-[#319d47]">Changed</h1>
          </span>
          <span className="flex">
            <h1 className="text-white">how businesses</h1>
          </span>
          <span className="flex space-x-2 md:space-x-5">
            <h1 className="text-white">process</h1>
            <h1 className="text-[#319d47]">payments.</h1>
          </span>
          <span className="pt-4 md:pt-10 inline-block leading-10 text-white text-[18px] md:text-[25px]">
            <p>Give your customers the power to choose.</p>
            <p>The choice of how to pay and when to save</p>
          </span>
          <div className="flex space-x-2 md:space-x-4 text-[14px] md:text-[18px] mt-5 mb-4">
            <button className="text-white bg-[#e37114] rounded-sm px-4 py-2 flex items-center justify-center">
              Get started
            </button>
            <button className="rounded-sm text-[#e37114] border-2 border-[#e37114] px-4 py-2 flex items-center justify-center">
              Contact sales
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <img src={man} alt="Retail" className="w-full h-auto max-w-full md:max-w-[438px] object-cover brightness-50" />
        </div>
      </div>
    </>
  );
};

export default Header;
