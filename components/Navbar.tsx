import Link from "next/link";
import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <img src="/logo.png/" alt="" width={35} height={40} />

          <span className="ml-2 font-bold text-[#146c43]">Coder,s Blog</span>
        </div>
      </Link>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600 ">
          <a href="">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600 ">
          <a href="">Pricing</a>
        </li>{" "}
        <li className="mr-6 font-medium text-gray-600 ">
          <a href="">Docs</a>
        </li>{" "}
        <li className="mr-6 font-medium text-gray-600 ">
          <a href="">Company</a>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Log in
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href="#"
            className="px-4 py-2 text-white transition-all rounded-sm bg-[#146c43] hover:bg-[#146c43]"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
