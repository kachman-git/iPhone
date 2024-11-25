import { navLists } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { appleImg, bagImg, searchImg } from "../utils/index";

const Navbar = () => {
  return (
    <header className="container mx-auto pt-4 px-20 flex justify-between items-center">
      <Link href={"#"}>
        <Image
          src={appleImg}
          alt={"logo"}
          width="18"
          height="18"
          className="cursor-pointer"
        />
      </Link>
      <div className="md:flex space-x-10 text-sm items-center hidden">
        {navLists.map((nav, index) => (
          <ul key={index}>
            <li className="text-gray hover:text-white transition-colors">
              <Link href={"#"}>{nav}</Link>
            </li>
          </ul>
        ))}
      </div>

      <div className=" flex space-x-7 justify-center items-center">
        <Image
          src={searchImg}
          alt={"logo"}
          width="20"
          height="20"
          className="cursor-pointer hidden md:block"
        />
        <Image
          src={bagImg}
          alt={"logo"}
          width="20"
          height="20"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Navbar;
