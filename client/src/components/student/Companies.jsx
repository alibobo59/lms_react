import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by Companies</p>
      <div>
        {" "}
        <img
          src={assets.microsoft_logo}
          alt="Microsoft"
          className="w-20 md:w-28"
        />
        <img
          src={assets.walmart_logo}
          alt="Microsoft"
          className="w-20 md:w-28"
        />
        <img
          src={assets.accenture_logo}
          alt="Microsoft"
          className="w-20 md:w-28"
        />
        <img src={assets.adobe_logo} alt="Microsoft" className="w-20 md:w-28" />
        <img
          src={assets.paypal_logo}
          alt="Microsoft"
          className="w-20 md:w-28"
        />
      </div>
    </div>
  );
};

export default Companies;
