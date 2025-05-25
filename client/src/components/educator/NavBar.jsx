import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, UserBUtton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>
      <div>
        <p>Hi {user ? user.fullName : "User"}</p>
        {user ? <UserButton /> : <img className="" />}
      </div>
    </div>
  );
};

export default NavBar;
