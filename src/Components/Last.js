import React from "react";
import fee from "../asset/fee.png";
import by from "../asset/by.png";
import social from "../asset/social.png"
import rectangle from "../asset/Rectangle.png"

const Last = () => {
  return (
    <div className="bg-[#011b06] pt-10 pl-10 flex  space-y-4">
      <div className=" space-y-7">
        <img className="w-[250px]" src={fee} alt="" />
    
      <p className="text-white font-bold text-2xl">(844) 4-FEEPASS <br />info@GetFeePass.com</p>
      {/* <p className="text-white font-bold text-2xl"></p> */}
      <img className="w-[200px]" src={by} alt="" />
      <div className="text-white space-y-2  ">
      <p>PonyPay, LLC is a registered ISO of Esquire Bank, Jericho,</p>
      <p>NY. Evolv Inc, is a registered ISO of Wells Fargo Bank, N.A.,</p>
      <p className="pb-20">Concord, CA and Fifth Third Bank, N.A., Cincinnati, OH.</p>
      </div>
      </div>
      <div className="text-[#319d47] space-y-6 ml-5 pt-32 text-xl">
        <p>HOME</p>
        <p>Solutions</p>
        <p>Marketing</p>
        <p>Blog</p>
        <p>Merchant Application</p>
      </div>
   
<div><img className="w-[200px] pt-24 ml-20" src={rectangle} alt="" /></div>
    <div className="ml-10 space-y-5 py-20 ">
        <nav><p className="text-white text-center text-xl ml-5 ">FOLLOW {" "} US {" "} ON</p></nav>
        <nav className="flex justify-center items-center"><img src={social} className="" alt="" /></nav>
      </div>
     
    </div>
  );
};

export default Last;
