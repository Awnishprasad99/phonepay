import React from "react";
import feecard from "../asset/feecard.png";
import mulcards from "../asset/mulcards.png";
import hording from "../asset/hording.png";

const Marketing = () => {
  return (
    <div className="bg-white w-full -mt-16 -mb-10">
      <div className="bg-white">
        <div className="text-center font-bold text-4xl md:text-[50px] pt-2 bg-white">
          <h1>
            Get All the{" "}
            <span className="text-[#006c32]">Marketing Materials</span>
          </h1>
          <h1>
            You Need to be a{" "}
            <span className="text-[#006c32]">SUCCESS.</span>
          </h1>
        </div>

        <div className="flex justify-center items-center mt-10">
          <img className="w-full max-w-[800px]" src={feecard} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center text-base md:text-[20px] pt-5 space-y-2">
          <p>
            We will work with you to get you all the marketing and training
            materials you need to explain <span className="font-bold">FEE</span>
            <span className="font-bold italic">PASS</span> to{" "}
          </p>
          <p>
            your co-workers and customers. From signage to display stands, table
            talkers to brochures, or banners to{" "}
          </p>
          <p>
            terminals and menu stickers. Check out all the sizes and varieties
            we have available below.
          </p>
          <p className="font-bold text-[#006e33]">
            Need more? Our design team is ready to work with you on anything you
            need.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <img className="w-full max-w-[600px] ml-0 md:ml-14" src={mulcards} alt="" />
          <img className="w-full max-w-[600px]" src={hording} alt="" />
        </div>

        <div className="flex justify-center items-center">
          <button className="rounded-2xl bg-[#018f17] text-white px-4 py-2 md:px-[250px] md:py-4 mt-5 text-center font-semibold text-sm md:text-base w-auto ">
            FILL OUT YOUR ONLINE MERCHANT APPLICATION HERE
          </button>
        </div>
  
      </div>
   
  
      
    </div>
  );
};

export default Marketing;
