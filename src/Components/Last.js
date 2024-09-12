import React from "react";
import fee from "../asset/fee.png";
import by from "../asset/by.png";

const Last = () => {
  return (
    <div className="bg-[#011b06] pt-10 pl-10 space-y-4">
      <div className="">
        <img className="w-[250px]" src={fee} alt="" />
      </div>
      <p className="text-white font-bold text-2xl">(844) 4-FEEPASS <br />info@GetFeePass.com</p>
      {/* <p className="text-white font-bold text-2xl"></p> */}
      <img className="w-[200px]" src={by} alt="" />
      <p className="text-white w-[410px] ">
        PonyPay, LLC is a registered ISO of Esquire Bank, Jericho, NY. Evolv
        Inc, is a registered ISO of Wells Fargo Bank, N.A., Concord, CA and
        Fifth Third Bank, N.A., Cincinnati, OH.
      </p>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Last;
