import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ data }) => {
  const SearchBar = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const onSearchHandler = (e) => {
    e.preventDefault();
    Navigate("/course-list/" + input);
  };
  return (
    <form
      onSubmit={onSearchHandler}
      className="flex max-w-xl w-full md:h-14 h-12 items-center bg-white border border-gray-500/2 rounded"
      action="">
      <img
        className="md:w-auto w-10 px-3"
        src={assets.search_icon}
        alt="search-icon"
      />
      <input
        type="text"
        placeholder="Search for courses"
        className="w-full h-full outline-none text-gray-500/70"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
