import Link from "next/link";
import React from "react";

function MenuItem({ title, address, Icon }) {
  return (
    <div className="flex">
      <div className="mx-4 lg:mx-6 ">
        <Link href={address} className="hover:text-amber-400">
          <Icon className="text-2xl sm:hidden mx-4" />
          <p className="hidden sm:inline my-2 text-sm font">{title}</p>
        </Link>
      </div>
    </div>
  );
}

export default MenuItem;
