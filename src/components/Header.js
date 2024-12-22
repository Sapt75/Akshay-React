import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center border-black border-[1px] p-4 m-4">
        <a href="/">
          <img
            width={60}
            src="https://th.bing.com/th/id/OIP._zHSsdDI6X5LnwpnBOMTswHaHa?w=190&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="logo"
          />
        </a>
        <ul className="flex space-x-10">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
