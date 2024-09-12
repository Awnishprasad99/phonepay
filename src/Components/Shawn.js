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
    <>
      {" "}
      <div className="bg-[#012b09]  justify-center items-center pt-16">
        <div className="bg-white rounded-2xl mx-auto w-[1200px] ">
          <div className="pt-10 text-center font-semibold text-[80px] ">
            <h1>
              Build <span className="text-[#006e33]">loyalty </span>and{" "}
              <span className="text-[#006e33]">trust</span>
            </h1>
            <h1>
              with your <span className="text-[#006e33]">customers.</span>
            </h1>
          </div>
          <div className=" flex justify-between">
            <div>
              <div className="ml-10 mt-16">
                <img className="w-[700px]" src={shawn} alt="shawns" />
                <div className="text-center">
                  <h1 className="font-bold text-xl">Shawn carroll</h1>
                  <p className="text-lg">CEO PONPAY</p>
                </div>
              </div>
            </div>
            <div className="mt-16 pl-5 pr-20 space-y-3 text-lg">
              <p className="italic ">
                “With rising inflation, high interest rates, and a volatile
                economy, some customers are looking for the most convenient way
                to pay, while others are looking for cost-savings options.
              </p>
              <p className="italic ">
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
                to improve your customer's experience and grow your business.”
              </p>
              <div className="pt-14">
                {" "}
                <hr className="border-1 -mr-20 -ml-[250px]  border-black" />
              </div>

              <div className=" font-bold text-[35px] space-y-5 pt-10 text-center -ml-40">
                <h1 className="">
                  <span className="text-[#006e33] tracking-tighter">FEE</span>{" "}
                  <span className="italic text-[#828284] tracking-tighter">
                    PASS{" "}
                  </span>
                  offers the technology to help merchants offer{" "}
                </h1>
                <h1>
                  a Card Price, a Cash Price, and other forms of payments.
                </h1>
                <div className="flex justify-center item-center pt-10">
                  <img src={visa} alt="" />
                </div>
              </div>

              <div className="pt-14">
                <hr className="border-1 -mr-20 -ml-[250px]  border-black " />
              </div>
              <h1 className="pt-10 text-[#006e33] -ml-[230px] font-bold text-4xl">
                How does it works?
              </h1>
              <div className="flex justify-between -ml-56 pt-2 ">
                <div className="space-y-5 text-lg">
                  <div className="w-[610px] ">
                    <h1 className="font-bold ">
                      We'll Take Care of All Your Re-pricing.
                    </h1>
                    <p>
                      With our proprietary technology we allow you to instantly
                      re-price your entire inventory. This includes signage on
                      the shelves, restaurant menus, websites, and anything else
                      in between.
                    </p>
                  </div>
                  <div className="w-[610px]">
                    <h1 className="font-bold ">Ring Up Your Sale.</h1>
                    <p>
                      With the FEEPASS software built into every terminal, it
                      will automatically display the CARD PRICE and CASH PRICE.
                    </p>
                  </div>
                  <div className="w-[610px]">
                    <h1 className="font-bold ">The Consumer Then Decides</h1>
                    <p>
                      Customers are now offered a clearer choice for paying with
                      Card, paying with Cash, or any of the other forms of
                      payments we offer.
                    </p>
                  </div>
                </div>
                <div className="">
                  <img className="w-[300px]" src={notice} alt="" />
                </div>
              </div>
              <div className="pt-14">
                <hr className="border-1 -mr-20 -ml-[250px]  border-black " />
              </div>
              <div>
                <div>
                  <div className="text-center font-semibold text-[68px] -ml-40 space-y-10 pt-10">
                    <div>
                      <h1 className=" ">
                        Running your{" "}
                        <span className="text-[#006e33] tracking-tight">
                          FEE
                        </span>
                        <span className="text-[#8f8f91] tracking-tight italic ">
                          PASS{" "}
                        </span>
                        program
                      </h1>
                    </div>
                    <div className="pt-5">
                      <h1>is easy as 1, 2, 3...</h1>
                    </div>
                  </div>
                  <div className="flex  pt-20 -ml-24">
                    <div>
                      <img className="w-[100px] mr-14" src={one} alt="" />
                    </div>
                    <div>
                      <p className="font-bold">
                        Update Your Price Lists & Menus
                      </p>
                      <p className="w-[600px]">
                        We recommend that you update your prices to properly
                        reflect a <span className="font-bold"> CARD</span> and{" "}
                        <span className="font-bold">CASH PRICE</span> on all
                        store items.
                      </p>
                    </div>
                  </div>
                  <div className="flex  pt-20 -ml-24">
                    <div>
                      <img className="w-[100px] mr-14" src={two} alt="" />
                    </div>
                    <div>
                      <p className="font-bold">Post the Signage We Provide</p>
                      <p className="w-[600px] ">
                        {" "}
                        <span className="">ONLY</span> Post the Signage We
                        Provide <span className="font-bold">ONLY</span> use the
                        card brand compliant signage{" "}
                        <span className="font-bold">WE </span> provide that{" "}
                        <span className="font-bold">PROPERLY </span>
                        alerts your customers and keeps you compliant with the{" "}
                        <span className="font-bold">FEE</span>
                        <span className="font-bold italic">
                          PASS
                        </span> program.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex  pt-20 -ml-24">
                    <div>
                      <img className="w-[100px] mr-14" src={three} alt="" />
                    </div>
                    <div>
                      <p className="font-bold">Start Selling</p>
                      <p className="w-[600px]">
                        Once you have updated your prices and posted our signage
                        you are ready to start processing payments.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-16 text-[20px] w-full pb-16">
                <button className="rounded-2xl bg-[#018f17]  text-white px-[150px] py-4 text-center -ml-16 font-semibold">
                  FILL OUT YOUR ONLINE MERCHANT APPLICATION HERE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#012b09]">
          {" "}
          <h1 className="text-[#e85b04] mt-10 text-center text-[29px]">
            Thousands of businesses have made the switch
          </h1>
        </div>

        <div className="flex justify-center mt-20  space-x-9 ">
          {/* this is for three cards */}
          <div className="bg-white w-[350px]   rounded-2xl ">
            <div className="flex space-x-5 mt-5 ml-5 pb-3 ">
              <div>
                <img className="w-[100px] " src={john} alt="" />
              </div>
              <div className="mt-6 font-semibold pl-5 text-[17px]">
                <p>Dr. John Smith</p>
                <p>Chiropractor</p>
              </div>
             
            </div>
            <div>
                <p className="font-semibold px-6 mt-4 mb-5 italic ">“Our chiropractice business is very happy with the switch. Not only we are saving thousands of dollars on processing fees but we can give our patients choices and that has been great for them.” </p>
              </div>
          </div>
          <div className="bg-white w-[350px]   rounded-2xl ">
            <div className="flex space-x-5 mt-5 ml-5 pb-3 ">
              <div>
                <img className="w-[100px] " src={brain} alt="" />
              </div>
              <div className="mt-6 font-semibold pl-5 text-[17px]">
                <p>Dr. John Smith</p>
                <p>Chiropractor</p>
              </div>
             
            </div>
            <div>
                <p className="font-semibold px-6 mt-4 mb-5 italic ">“Our chiropractice business is very happy with the switch. Not only we are saving thousands of dollars on processing fees but we can give our patients choices and that has been great for them.” </p>
              </div>
          </div>
          <div className="bg-white w-[350px]   rounded-2xl ">
            <div className="flex space-x-5 mt-5 ml-5 pb-3 ">
              <div>
                <img className="w-[100px] " src={robert} alt="" />
              </div>
              <div className="mt-6 font-semibold pl-5 text-[17px]">
                <p>Dr. John Smith</p>
                <p>Chiropractor</p>
              </div>
             
            </div>
            <div>
                <p className="font-semibold px-6 mt-4 mb-5 italic ">“Our chiropractice business is very happy with the switch. Not only we are saving thousands of dollars on processing fees but we can give our patients choices and that has been great for them.” </p>
              </div>
          </div>
          
        </div>
        <div className="flex justify-center items-center pt-20 gap-8 mb-16">
          <button className="text-white px-5 text-[25px] bg-[#e37114] rounded-md ">Get Started</button>
          <button className="border-2 text-[25px] px-5 border-white rounded-md text-[#fb7804]">Contact sales</button>
        </div>
        <div className="">
        <svg
        className='w-full mx-auto  -mb-1'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 100'
      >
        <path d='M 0 20 Q 720 90 1440 20 L 1440 100 L 0 100 Z' fill='white' />
      </svg>
      
        </div>
      </div>
    </>
  );
};

export default Shawn;
