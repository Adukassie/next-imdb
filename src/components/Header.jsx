// import React from "react";

import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto ">
      <div className="flex m-5">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center">
        <input
          className="bg-gray-200 w-300 mx-0 rounded-tl-md rounded-bl-md"
          type="text"
        />
        <AiOutlineSearch className="bg-gray-200 h-6 text-black rounded-tr-md rounded-br-md cursor-pointer font-medium" />
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/" className="">
          <h2 className="text-2xl ">
            <span className="font-bold bg-amber-500">IMDb</span>
            <span className="hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
