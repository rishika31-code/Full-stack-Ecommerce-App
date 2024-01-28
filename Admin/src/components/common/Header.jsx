import React from "react";
import { HiBell } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="px-5 py-3 w-full flex justify-end z-20 sticky top-0 items-center h-16 font-poppins text-black  bg-white ">
      <div className="flex justify-center items-center gap-4">
        <HiBell className=" text-4xl cursor-pointer" />
        <RiUser3Fill className=" text-3xl cursor-pointer" />
        <div className=" flex flex-col justify-center text-black">
          <h1>Admin</h1>
          <h1> Id : 3552542</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
