import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto ">
      <div className="flex m-5">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <input className="bg-gray-200 " type="text" />
      <AiOutlineSearch/>
      <div className="">
        <Link href="/" className="">
          <h2 className="text-2xl ">
            <span className="font-bold bg-amber-300">IMDb</span>
            <span className="hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
