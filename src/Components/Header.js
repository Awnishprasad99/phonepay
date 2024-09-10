import React from "react";
import logo from "../asset/feepass.png";
import lo from "../asset/logo.png";
import man from "../asset/Retail.png"

const Header = () => {
  return (
    <>
    <div className="bg-white py-1 flex ">
      <div className="ml-10 pt-5">
        
        <span className="w-14 inline-block">
          <img src={lo} alt="" />
        </span>
        <span className="inline-block w-36 ">
          <img src={logo} alt="" />
        </span>
      </div>
<div className="justify-between pl-36 pt-8 ">
    <ul className="flex space-x-10   ">
        <li>Home </li>
        <li>Solution</li>
        <li>Marketing </li>
        <li>blog</li>
        <li>Contact</li>
    </ul>
</div>

<span className="pl-32 pt-4"><button className="border-red-500 border-2 rounded-md h-9 pl-3 pr-3">Get Started (Merchant Application)</button></span>

    </div>

    <div className="flex justify-between bg-gradient-to-tr from-[#011b06] ">
        <div className="text-7xl pl-10 pt-10">
        <span className="inline-block flex  space-x-5 "><h1 className="text-white">We</h1><h1 className="text-[#319d47]">Changed</h1></span>
        <span className="inline-block flex "><h1 className="text-white">how businesses</h1></span>
        <span className="inline-block flex space-x-5"><h1 className="text-white">process </h1><h1 className="text-[#319d47]">payments.</h1></span>

        <span className="pt-10 inline-block leading-10  text-white text-[25px]"><p>Give your customers the power to choose.</p><p>The choice of how to pay and when to save</p></span>
        <div className="space-x-4 text-[18px]  mt-5">
            <button className="text-white bg-[#e37114] rounded-sm  pl-2 pr-2  pt-1 pb-1 h-8">Get started</button>
            <button className="rounded-sm text-[#e37114] border-2 pl-2 pr-2 py-1 h-8 ">Contact sales</button>
        </div>
        </div>
        
        <div className="brightness-50 w-[438px] "><img src={man} alt="" /></div>

        


    </div>

   

    </>




  );
};

export default Header;
