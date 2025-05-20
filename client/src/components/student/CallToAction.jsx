import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0 ">
      <h1 className="text-xl md:text-4xl text-gray-900">
        This is some Call to Action
      </h1>
      <p className="text-gray-500 sm:text-small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        cupiditate, repellat nihil necessitatibus provident asperiores quos
        voluptate tempore, distinctio eius earum quidem in, omnis dolore saepe
        ut pariatur rem recusandae.
      </p>
      <div className="flex items-center font-medium mt-4 gap-6">
        <button className="px-10 py-3 rounded-md text-white bg-blue-600">
          Get started
        </button>
        <button className="flex items-center gap-2">
          Learn More <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
