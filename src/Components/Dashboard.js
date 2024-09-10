import React from "react";

import Dash from "../asset/overview.png";

const Dashboard = () => {
    return (
        <>
          <div className="bg-gradient-to-b from-[#011b06] via-[#034e13] to-[#012b0a] pt-20 flex justify-center items-center">

                <div className="bg-white rounded-2xl  w-[1200px]  ">
                    <div className="flex">
                        {" "}
                        <div className="text-7xl font-semibold space-y-6  ml-10 mt-7">
                            <h1 className="">Intuitive </h1>{" "}
                            <h1 className="text-[#319d47]">Dashboards</h1>
                            <h1>Complete</h1>
                            <h1 className="text-[#319d47]">Transparency.</h1>
                        </div>
                        <img className="w-[650px] ml-auto mt-10 mr-10 " src={Dash} alt="" />
                    </div>

                    <div className=" ml-10 mt-20 text-[28px] ">
                        <span>
                            View all tracking on the go or on the road. Our dashboards allow
                            for convenient executive
                        </span>
                        <span>
                            level reporting, whether that’s from the business location, on the
                            go, or in the comfort of
                        </span>
                        <span>your own home. </span>
                    </div>

                    <div className="-ml-40 mt-10">
                        <div className=" text-center  font-semibold text-[58px]">
                            <h1 className=" ">
                                Custom-tailored{" "}
                                <span className="text-[#319d47]">products & services</span>{" "}
                            </h1>
                            <h1 className=" ml-40 ">
                                for{" "}
                                <span className="text-[#319d47]">retail, restaurants, </span>and
                                most <span className="text-[#319d47]">businesses.</span>{" "}
                            </h1>
                        </div>
                    </div>

                    <div>
                        <ul className="mt-10 space-y-28">
                            <div className="flex items-center space-x-10">
                                <span className="ml-16 text-6xl -mt-24 font-bold border-black border-4 rounded-full px-9 py-6">
                                    1
                                </span>
                                <div className="space-y-3">
                                    <h1 className=" font-semibold text-6xl ">
                                        Sell in more places.{" "}
                                    </h1>
                                    <p className="text-4xl">
                                        Open new streams of revenue. Track inventory, get sales
                                        reports,and integrate orders, and inventory from your POS
                                        system to your website.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <span className="ml-16 text-6xl -mt-24 font-bold border-black border-4 rounded-full px-9 py-6">
                                    2
                                </span>
                                <div className="space-y-3">
                                    <h1 className=" font-semibold text-6xl ">
                                        Reach more customers.{" "}
                                    </h1>
                                    <p className="text-4xl">
                                        Offer new forms of payments including Buy Now, Pay later
                                        with Afterpay. Build custom commerce experience through
                                        FEEPASS with integrated e-commerce sites.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <span className="ml-16 text-6xl -mt-24 font-bold border-black border-4 rounded-full px-9 py-6">
                                    3
                                </span>
                                <div className="space-y-3">
                                    <h1 className=" font-semibold text-6xl ">
                                        Business integrations.{" "}
                                    </h1>
                                    <p className="text-4xl pr-3">
                                        Integrate FEEPASS wiht your business software or website
                                        using our APIs for payments, commerce, customers, and staff.
                                        Connect payment hardware to your business software using
                                        terminal API,Reader SDK, and POS API.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <span className="ml-16 text-6xl -mt-24 font-bold border-black border-4 rounded-full px-9 py-6">
                                    4
                                </span>
                                <div className="space-y-3">
                                    <h1 className=" font-semibold text-6xl ">
                                        Apps for your business{" "}
                                    </h1>
                                    <p className="text-4xl pb-20">
                                        Use our prebuilt, vetted partner integrations in the apple
                                        store and google play. Quickbooks integration and more.{" "}
                                    </p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

                
            </div>
        </>
    );
};

export default Dashboard;
