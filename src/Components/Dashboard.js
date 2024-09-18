import React from "react";

import Dash from "../asset/overview.png";

const Dashboard = () => {
    return (
        <div className="bg-gradient-to-b from-[#011c06] via-[#034e13] to-[#011c06] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="bg-white rounded-2xl p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="text-4xl md:text-5xl lg:text-7xl font-semibold space-y-2 md:space-y-6 text-center md:text-left mb-8 md:mb-0">
                            <h1>Intuitive</h1>
                            <h1 className="text-[#319d47]">Dashboards</h1>
                            <h1>Complete</h1>
                            <h1 className="text-[#319d47]">Transparency.</h1>
                        </div>
                        <img className="w-full md:w-1/2 lg:w-[650px] mt-6 md:mt-0 md:ml-auto" src={Dash} alt="Dashboard Overview" />
                    </div>

                    <div className="mt-10 md:mt-20 text-lg md:text-2xl lg:text-[28px] text-center md:text-left">
                        <p>
                            View all tracking on the go or on the road. Our dashboards allow
                            for convenient executive level reporting, whether that's from the business location, on the
                            go, or in the comfort of your own home.
                        </p>
                    </div>

                    <div className="mt-10 md:mt-20">
                        <div className="text-center font-semibold text-3xl md:text-4xl lg:text-[58px] space-y-4">
                            <h1>
                                Custom-tailored <span className="text-[#319d47]">products & services</span>
                            </h1>
                            <h1>
                                for <span className="text-[#319d47]">retail, restaurants, </span>
                                and most <span className="text-[#319d47]">businesses.</span>
                            </h1>
                        </div>
                    </div>

                    <ul className="mt-10 md:mt-20 space-y-16 md:space-y-28">
                        {[ 
                            { number: 1, title: "Sell in more places.", description: "Open new streams of revenue. Track inventory, get sales reports, and integrate orders, and inventory from your POS system to your website." },
                            { number: 2, title: "Reach more customers.", description: "Offer new forms of payments including Buy Now, Pay later with Afterpay. Build custom commerce experience through FEEPASS with integrated e-commerce sites." },
                            { number: 3, title: "Business integrations.", description: "Integrate FEEPASS with your business software or website using our APIs for payments, commerce, customers, and staff. Connect payment hardware to your business software using terminal API, Reader SDK, and POS API." },
                            { number: 4, title: "Apps for your business", description: "Use our prebuilt, vetted partner integrations in the apple store and google play. Quickbooks integration and more." }
                        ].map((item, index) => (
                            <li key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-10">
                                <span className="text-4xl md:text-6xl font-bold border-black border-4 rounded-full px-6 py-3 md:px-9 md:py-6">
                                    {item.number}
                                </span>
                                <div className="space-y-3 text-center md:text-left">
                                    <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl">{item.title}</h1>
                                    <p className="text-xl md:text-2xl lg:text-4xl">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
