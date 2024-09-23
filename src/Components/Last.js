import React from "react";
import fee from "../asset/fee.png";
import by from "../asset/by.png";
import social from "../asset/social.png";
import Input from './Input.js';

const Last = () => {
  return (
    <div className="bg-[#011b06] pt-10 px-4 md:px-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
      <div className="space-y-7">
        <img className="w-[150px] md:w-[250px]" src={fee} alt="" />
        <p className="text-white font-bold text-lg md:text-2xl">
          (844) 4-FEEPASS <br /> info@GetFeePass.com
        </p>
        <img className="w-[150px] md:w-[200px]" src={by} alt="" />
        <div className="text-white space-y-2">
          <p>PonyPay, LLC is a registered ISO of Esquire Bank, Jericho,</p>
          <p>NY. Evolv Inc, is a registered ISO of Wells Fargo Bank, N.A.,</p>
          <p className="pb-20">Concord, CA and Fifth Third Bank, N.A., Cincinnati, OH.</p>
        </div>
      </div>
      <div className="text-[#319d47] space-y-6 md:ml-5  md:pt-32 text-lg md:text-xl text-center md:text-left">
        <p className="hover:underline">HOME</p>
        <p className="hover:underline">Solutions</p>
        <p className="hover:underline">Marketing</p>
        <p className="hover:underline">Blog</p>
        <p className="hover:underline">Merchant Application</p>
      </div>
      <div className="pt-10 md:pt-0 flex justify-center md:justify-start w-full md:w-auto">
        <Input />
      </div>
      <div className="md:ml-10 space-y-5">
        <nav>
          <p className="text-white text-center text-lg md:text-xl">FOLLOW US ON</p>
        </nav>
        <nav className="flex justify-center items-center">
          <img src={social} className="w-[150px] md:w-auto" alt="" />
        </nav>
      </div>
    </div>
  );
};

export default Last;
