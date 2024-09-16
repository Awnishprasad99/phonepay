import React from "react";
import { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha'


const Input = () => {
  const [company, setCompany] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  console.log("envkey",process.env.REACT_APP_SITE_KEY)

  return (
    <div className="bg-[#3f4349] w-[300px]">
      <form className="" onClick={(e) => e.preventDefault}>
        <p className="text-2xl text-gray-100 mb-4 text-center">
          Join{" "}
          <span className="text-green-500 font-bold whitespace-nowrap">
            Fee
          </span>
          <span className="font-bold italic">Pass</span> Today!
        </p>
        <div className="flex flex-col mx-auto justify-center items-center">
  <div className=" max-w-sm">
    <div className="mb-4">
      <p className="text-white">Company</p>
      <input
    
        type="text"
        required
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className="w-full px-3 py-2 text-white bg-black border-2 border-white rounded"
      />
    </div>
    <div className="mb-4">
      <p className="text-white">Phone</p>
      <input
        type="number"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone"
        className="w-full px-3 py-2 text-white bg-black border-2 border-white rounded"
      />
    </div>
    <div className="mb-4">
      <p className="text-white">Email</p>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 text-white bg-black border-2 border-white rounded"
      />
       <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
      <button>Submit</button>
    </div>
  </div>
</div>


      </form>
    </div>
  );
};

export default Input;
