import React from "react";
import shawn from "../asset/shawn.png";
import visa from "../asset/visa.png";
import notice from "../asset/notice.png";
import one from "../asset/one.png";
import two from "../asset/two.png";
import three from "../asset/three.png";
import john from '../asset/john.png'
import brain from '../asset/brain.png'
import robert from '../asset/robert.png'

const Shawn = () => {
  return (
    <div className="bg-[#012b09] py-4 md:py-16">
      <div className="bg-white rounded-2xl mx-auto w-full md:w-[1200px]">
        <div className="pt-6 md:pt-10 text-center font-semibold text-4xl md:text-[80px]">
          <h1>
            Build <span className="text-[#006e33]">loyalty </span>and{" "}
            <span className="text-[#006e33]">trust</span>
          </h1>
          <h1 className="mt-4 md:mt-8 lg:mt-12">
            with your <span className="text-[#006e33]">customers.</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:ml-10 mt-8 md:mt-16">
            <img className="w-full md:w-[700px]" src={shawn} alt="shawns" />
            <div className="text-center">
              <h1 className="font-bold text-xl">Shawn carroll</h1>
              <p className="text-lg">CEO PONPAY</p>
            </div>
          </div>
          <div className="mt-8 md:mt-16 px-4 md:pl-5 md:pr-20 space-y-3 text-base md:text-lg">
            <p className="italic">
              "With rising inflation, high interest rates, and a volatile
              economy, some customers are looking for the most convenient way
              to pay, while others are looking for cost-savings options.
            </p>
            <p className="italic">
              <span className="font-bold">
                {" "}
                <span className="not-italic">FEE</span>PASS
              </span>{" "}
              offers the technology to help merchants offer a{" "}
              <span className="font-bold"> Card Price</span> and{" "}
              <span className="font-bold"> Cash Price</span> in their store.
              The terminal or point-of-sale system will automatically display
              both options to the ustomer, who now has a clearer choice in
              their form of payment.{" "}
            </p>
            <p className="italic">
              By adjusting your business model and offering your customers a
              choice, you not only build trust and repeat customers easier for
              today's changing market, you also enhance your ustomer's
              experience by offering an option for maximum cost-savings when
              it really counts.{" "}
            </p>
            <p className="italic">
              Choose{" "}
              <span className="font-bold">
                {" "}
                <span className="not-italic">FEE</span>PASS
              </span>{" "}
              to improve your customer's experience and grow your business."
            </p>
            <div className="pt-14">
              <hr className="border-1 border-black md:-mr-20 md:-ml-[250px]" />
            </div>

            <div className="font-bold text-2xl md:text-[35px] space-y-5 pt-10 text-center md:-ml-40">
              <h1>
                <span className="text-[#006e33] tracking-tighter">FEE</span>{" "}
                <span className="italic text-[#828284] tracking-tighter">PASS </span>
                offers the technology to help merchants offer{" "}
              </h1>
              <h1>
                a Card Price, a Cash Price, and other forms of payments.
              </h1>
              <div className="flex justify-center items-center pt-10">
                <img src={visa} alt="" className="max-w-full" />
              </div>
            </div>

            <div className="pt-14">
              <hr className="border-1 border-black md:-mr-20 md:-ml-[250px]" />
            </div>
            <h1 className="pt-10 text-[#006e33] md:-ml-[230px] font-bold text-2xl md:text-4xl">
              How does it works?
            </h1>
            <div className="flex flex-col md:flex-row justify-between md:-ml-56 pt-2">
              <div className="space-y-5 text-lg">
                <div className="md:w-[610px]">
                  <h1 className="font-bold">
                    We'll Take Care of All Your Re-pricing.
                  </h1>
                  <p>
                    With our proprietary technology we allow you to instantly
                    re-price your entire inventory. This includes signage on
                    the shelves, restaurant menus, websites, and anything else
                    in between.
                  </p>
                </div>
                <div className="md:w-[610px]">
                  <h1 className="font-bold">Ring Up Your Sale.</h1>
                  <p>
                    With the FEEPASS software built into every terminal, it
                    will automatically display the CARD PRICE and CASH PRICE.
                  </p>
                </div>
                <div className="md:w-[610px]">
                  <h1 className="font-bold">The Consumer Then Decides</h1>
                  <p>
                    Customers are now offered a clearer choice for paying with
                    Card, paying with Cash, or any of the other forms of
                    payments we offer.
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <img className="w-full md:w-[300px]" src={notice} alt="" />
              </div>
            </div>
            <div className="pt-14">
              <hr className="border-1 border-black md:-mr-20 md:-ml-[250px]" />
            </div>
            <div>
              <div className="text-center font-semibold text-2xl sm:text-3xl md:text-5xl md:text-[68px] md:-ml-40 space-y-4 sm:space-y-6 md:space-y-10 pt-6 sm:pt-8 md:pt-10">
                <div>
                  <h1 className="leading-tight whitespace-nowrap">
                    Running your <span className="text-[#006e33]">FEE</span><span className="text-[#828284]">PASS</span> Program
                  </h1>
                </div>
                <div className="pt-2 sm:pt-3 md:pt-5">
                  <h1 className="text-xl sm:text-2xl md:text-[68px]">is easy as 1, 2, 3...</h1>
                </div>
              </div>
              {[one, two, three].map((img, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center md:items-start pt-10 md:pt-20 md:-ml-24">
                  <div>
                    <img className="w-[100px] md:mr-14" src={img} alt="" />
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="font-bold">
                      {index === 0 && "Update Your Price Lists & Menus"}
                      {index === 1 && "Post the Signage We Provide"}
                      {index === 2 && "Start Selling"}
                    </p>
                    <p className="md:w-[600px]">
                      {index === 0 && "We recommend that you update your prices to properly reflect a CARD and CASH PRICE on all store items."}
                      {index === 1 && "ONLY Post the Signage We Provide ONLY use the card brand compliant signage WE provide that PROPERLY alerts your customers and keeps you compliant with the FEEPASS program."}
                      {index === 2 && "Once you have updated your prices and posted our signage you are ready to start processing payments."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-16 text-[20px] w-full pb-16">
              <button className="rounded-2xl bg-[#018f17] text-white px-4 md:px-[150px] py-4 text-center md:-ml-16 font-semibold w-full md:w-auto">
                FILL OUT YOUR ONLINE MERCHANT APPLICATION HERE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#012b09] mt-8 md:mt-10">
        <h1 className="text-[#e85b04] text-center text-2xl md:text-[29px] py-4 md:py-8">
          Thousands of businesses have made the switch
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-20 space-y-6 md:space-y-0 md:space-x-9 px-4">
        {[john, brain, robert].map((img, index) => (
          <div key={index} className="bg-white w-full md:w-[350px] rounded-2xl p-4">
            <div className="flex items-center space-x-5">
              <img className="w-[100px]" src={img} alt="" />
              <div className="font-semibold text-[17px]">
                <p>Dr. John Smith</p>
                <p>Chiropractor</p>
              </div>
            </div>
            <p className="font-semibold mt-4 mb-5 italic">
              "Our chiropractice business is very happy with the switch. Not only we are saving thousands of dollars on processing fees but we can give our patients choices and that has been great for them."
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center pt-10 md:pt-20 gap-4 md:gap-8 mb-8 md:mb-16">
        <button className="text-white px-5 py-2 text-xl md:text-[25px] bg-[#e37114] rounded-md w-full md:w-auto">Get Started</button>
        <button className="border-2 px-5 py-2 text-xl md:text-[25px] border-white rounded-md text-[#fb7804] w-full md:w-auto mt-4 md:mt-0">Contact sales</button>
      </div>

      <div>
        <svg
          className='w-full mx-auto -mb-1'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 100'
        >
          <path d='M 0 20 Q 720 90 1440 20 L 1440 100 L 0 100 Z' fill='white' />
        </svg>
      </div>
    </div>
  );
};

export default Shawn;
