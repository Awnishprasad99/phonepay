import React from "react";

import vector1 from "../asset/vector1.png";
import vector2 from "../asset/vector2.png";
import vector3 from "../asset/vector3.png";

const Hardware = () => {
  return (
    <div className="bg-gradient-to-b from-[#011c06] via-[#034d12] to-[#011c06] w-full py-16 md:py-24">
      <div className="bg-gradient-to-b from-transparent via-[#034d12] to-transparent">
        <div className="py-8 md:py-16 px-4 md:px-8 lg:px-14">
          <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            <span className="text-[#319d47]">Hardware </span> and{" "}
            <span className="text-[#319d47]">POS systems </span>
          </h1>
          <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold text-white">
            built to <span className="text-[#319d47]">sell anywhere.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-28 py-8 md:py-20 text-white">
          {[ 
            { src: vector1, alt: "In-store", title: "In-store" },
            { src: vector2, alt: "Online", title: "Online" },
            { src: vector3, alt: "Mobile", title: "Mobile" }
          ].map((item, index) => (
            <div key={index} className="w-full md:w-1/3 flex flex-col items-center justify-between mb-12 md:mb-0">
              <div className="h-40 md:h-48 lg:h-56 flex items-center justify-center mb-4">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hardware;
