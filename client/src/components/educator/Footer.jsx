import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-betwwen text-left w-full px-8 border-t">
      {/*Container */}
      <div className="flex items-center gap-4">
        {/* left side */}
        <img src={assets.logo} alt="logo" className="hidden md:block w-20" />
        {/*a seperator stroke */}
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          {" "}
          Copyright 2025 @TimingDeptry
        </p>
      </div>
      <div className="flex items-center gap-3 max-md:mt-4">
        {/* right side */}
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
