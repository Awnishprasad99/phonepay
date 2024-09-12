import React from "react";

import video from '../asset/SampleVideo_1280x720_1mb.mp4'

const Become = () => {
  return (
    <div>
      <div>
        <div className="bg-[#012909]   ">
        <svg
  className="w-full mx-auto mt-10"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 100"
>
  <path d="M 0 20 Q 720 90 1440 20 L 1440 0 L 0 0 Z" fill="white" />
</svg>
          <h1 className="text-[#eb5c04] text-center font-semibold text-[50px]">
            Become a success story
          </h1>
          <div className="text-white flex pl-40 pr-40 justify-between mt-20">
            <div>
              {" "}
              <div className=" mt-20">
                <p className="font-semibold">
                  Become one more success story and share your
                </p>
              </div>
              <div className="">
                <p className="font-semibold">
                  journey, your business story, and how FEEPASS
                </p>
              </div>
              <div className="">
                <p className="font-semibold">
                  is helping you achieve your goals.{" "}
                </p>{" "}
              </div>
            </div>
            <div className="w-1/2 aspect-video border-[5px] border-orange object-cover rounded-2x border-orange-600"><video controls src={video} autoPlay={true}></video></div>
          
          </div>
          {/*  */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Become;
