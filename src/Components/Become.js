import React from "react";
import video from "../asset/SampleVideo_1280x720_1mb.mp4";
import mpt from "../asset/mpt.png";
import pon from "../asset/pon.png";
import sale from "../asset/sale.png";

const Become = () => {
  return (
    <div>
      <div>
        <div className="bg-[#011b06]">
          <svg
            className="w-full mx-auto mt-10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
          >
            <path d="M 0 20 Q 720 90 1440 20 L 1440 0 L 0 0 Z" fill="white" />
          </svg>
          <h1 className="text-[#eb5c04] text-center font-semibold text-3xl md:text-[50px]">
            Become a success story
          </h1>
          <div className="text-white flex flex-col md:flex-row px-4 md:px-40 justify-between mt-10 md:mt-20 mb-10">
            <div className="md:w-1/2">
              <div className="mt-10 md:mt-20">
                <p className="font-semibold">
                  Become one more success story and share your
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  journey, your business story, and how FEEPASS
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  is helping you achieve your goals.
                </p>
              </div>
            </div>
            <div className="rounded-2xl w-full md:w-1/2 aspect-video border-[5px] border-orange-600 object-cover mt-10 md:mt-0">
              <video
                controls
                src={video}
                className="rounded-xl w-full h-full"
                autoPlay={true}
              ></video>
            </div>
          </div>
          <div className="bg-white mx-auto w-full md:w-[1200px] rounded-2xl p-4 md:p-10">
            <h1 className="font-bold text-3xl md:text-[80px] text-center">
              Experience you can trust
            </h1>
            <div className="font-semi-bold text-lg md:text-[40px] mt-10 leading-10">
              <p className="text-[#39943c]">100K</p>
              <p>Trusted by 100K+ FEEPASS customers</p>
            </div>
            <div className="font-semi-bold text-lg md:text-[40px] mt-10 leading-10">
              <p className="text-[#39943c]">$1B+</p>
              <p>In sales transactions annually</p>
            </div>
            <div className="font-semi-bold text-lg md:text-[40px] mt-10 leading-10">
              <p className="text-[#39943c]">100+ years</p>
              <p>In combined experience in the payments industry</p>
            </div>
            <hr className="mt-10 mx-10 border-1 border-black" />
            <h1 className="mt-10 text-center font-bold text-3xl md:text-[50px]">
              OUR PARTNERS
            </h1>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-20 mt-10 md:mt-20">
              <img src={mpt} alt="" className="w-1/3 md:w-auto" />
              <img src={pon} alt="" className="w-1/3 md:w-auto" />
            </div>
            <hr className="mx-10 border-1 mt-10 md:mt-60 border-black" />
            <h1 className="text-2xl md:text-[40px] font-bold text-center mt-10">
              LATEST NEWS & BLOGS
            </h1>
            <div className="flex flex-col md:flex-row mt-10 md:mt-20">
              <div className="mb-10 md:ml-10">
                <img src={sale} className="w-full md:w-1/2" alt="" />
              </div>
              <div className="pt-10 md:pt-0 md:pl-10">
                <p className="font-bold text-lg">SELLING YOUR BUSINESS</p>
                <p className="w-full md:w-[500px]">
                  It's time to hang your gloves, kick back and relax. When you are a business owner and the time comes to retire, how should you top about selling your business if you don't have someone to hand over the business to, or simply don't want to simply close the doors? Here are a couple of steps to make sure you sell your small business safely and smartly. 
                  <span className="font-bold">Continue Reading </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
