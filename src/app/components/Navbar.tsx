import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-600 w-full h-16 text-white flex justify-around items-center">
      <h1 className="  text-4xl cursor-pointer">
        <Link href={"/"}>PDF Merger</Link>
      </h1>

      <ul className=" flex justify-center items-center gap-4 text-xl">
        <li className="hover:bg-white/20 px-2 duration-150 hover:scale-110">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:bg-white/20 px-2 duration-150 hover:scale-110">
          <Link href={"/mergerPage "}>PDF</Link>
        </li>
        <li className="hover:bg-white/20 px-2 duration-150 hover:scale-110">
          <Link href={"#"}>Link 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
