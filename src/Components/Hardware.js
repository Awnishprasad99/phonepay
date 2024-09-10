import React from "react";

import vector1 from "../asset/vector1.png";
import vector2 from "../asset/vector2.png";
import vector3 from "../asset/vector3.png";

const Hardware = () => {
  return (
    <div className="bg-[#034d12]   ">
      <div className="font-bold text-[60px] pt-16 bg-[#034e13]  bg-gradient-to-b from-[#012b0a] via-[#012b0a] text-white ">
        <h1 className="text-center ">
          {" "}
          <span className="text-[#319d47]">Hardware </span> and{" "}
          <span className="text-[#319d47]">POS systems </span>
        </h1>
        <h1 className="text-center">
          built to <span className="text-[#319d47]">sell anywhere.</span>
        </h1>
      </div>

      <div className=" bg-gradient-to-t from-[#022a09]  flex pt-20 justify-between items-center pl-28 pr-28 text-white text-[50px] ">
        <div className="w-[200px]  text-center">
          <img src={vector1} alt="" /> <h1 className="">In-store</h1>
        </div>

        <div className="w-[200px]  text-center ">
          <img src={vector2} alt="" />
          <h1 className="mt-8">Online</h1>
        </div>
        <div className="w-[100px] flex flex-col justify-center items-center text-center">
          <img src={vector3} alt="" />
          <h1 className="mt-5">Mobile</h1>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
