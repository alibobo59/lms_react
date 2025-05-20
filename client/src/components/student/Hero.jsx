import React from "react";
import { assets } from "../../assets/assets";

import SearchBar from "@/components/student/SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
        Tam Minh Đẹp trai<span className="text-blue-600"> nhất thế giới</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>
      <p className="hidden md:block text-gray-500 max-w-2xl mx-auto">
        Tam Minh là một huyền thoại sống về sự đẹp trai. Sự rạng ngời của anh
        không chỉ đến từ ngoại hình mà còn từ thần thái cuốn hút, khiến mọi
        người phải ngoái nhìn mỗi khi anh xuất hiện.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        Tam Minh là một huyền thoại sống về sự đẹp trai. Sự rạng ngời của anh
        không chỉ đến từ ngoại hình mà còn từ thần thái cuốn hút, khiến mọi
        người phải ngoái nhìn mỗi khi anh xuất hiện.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
