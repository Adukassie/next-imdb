"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre");
  return (
    <div className="">
      <Link
        className={`m-4 hover:text-amber-400 font-semibold p-2 text-lg ${genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg"}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
