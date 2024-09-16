import React from "react";
import { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha'


const Input = () => {
  const [company, setCompany] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  console.log("envkey",process.env.REACT_APP_SITE_KEY)

  return (
    <div className="bg-[#3f4349] w-[300px] h-auto mb-5 pb-5  ml-10 rounded-sm ">
      <form className="" onClick={(e) => e.preventDefault}>
        <p className=" w-fit ml-10 pt-2 text-gray-100 mb-2 text-center">
          Join{" "}
          <span className="text-green-500 font-bold whitespace-nowrap">
            Fee
          </span>
          <span className="font-bold italic">Pass</span> Today!
        </p>
        <div className="mx-auto">
  <div className=" max-w-sm">
    <div className="mb-4 w-fit mx-auto">
      <p className="text-white">Company</p>
      <input
    
        type="text"
        required
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className=" px-3 py-1 text-white mt-1 bg-black  rounded"
      />
    </div>
    <div className="mb-4 w-fit mx-auto ">
      <p className="text-white">Phone</p>
      <input
   
    type="number"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone"
        className=" px-3 py-1 mt-1 text-white bg-black  rounded"
      />
    </div>
    <div className="mb-4 w-fit mx-auto">
      <p className="text-white">Email</p>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className=" px-3 py-1 mt-1 text-white bg-black  rounded"
      />

    </div>
       <ReCAPTCHA className=" transform scale-75 w-fit  " sitekey={process.env.REACT_APP_SITE_KEY} />
      <button className="text-white   bg-black px-5 py-2  border-[1px] justify-between items-center flex flex-col border-white rounded-md  mx-auto">Submit</button>
  </div>
</div>


      </form>
    </div>
  );
};

export default Input;
