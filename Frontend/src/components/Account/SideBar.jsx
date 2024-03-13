import React from "react";
import { useSelector } from "react-redux";
import { IoBagOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const { userDetails } = useSelector((state) => state.authSlice);

  return (
    <div
      className="w-[28rem] border overflow-y-scroll h-[45rem]
catgeory-sidebar sticky z-30 top-[5.75rem] left-0 shadow-md  flex-col font-poppins hide-scrollbar bg-[rgb(60,0,107)] rounded-md text-white md:flex hidden "
    >
      <div className="px-4 py-8  flex flex-col gap-1 border-b">
        <h1 className="text-xl">My Account</h1>
        <p>{userDetails.email}</p>
      </div>

      <div className="px-4 py-5  flex flex-col gap-3 border-b ">
        <NavLink to={"/account/orders"}>
          <div className=" flex gap-3 p-2 rounded-md items-center cursor-pointer">
            <IoBagOutline className=" text-2xl" />
            <h1 className=" text-xl">Orders</h1>
          </div>
        </NavLink>
        <NavLink to={"/account/support"}>
          <div className=" flex gap-3 p-2 items-center cursor-pointer">
            <IoChatbubblesOutline className=" text-2xl" />
            <h1 className=" text-xl">Support</h1>
          </div>
        </NavLink>
        <NavLink to={"/account/addresses"}>
          <div className=" flex gap-3 p-2 items-center cursor-pointer">
            <SlLocationPin className=" text-2xl" />
            <h1 className=" text-xl">Addresses</h1>
          </div>
        </NavLink>
        <NavLink to={"/account/profile"}>
          <div className=" flex gap-3 p-2 items-center cursor-pointer">
            <VscAccount className=" text-2xl" />
            <h1 className=" text-xl">Profile</h1>
          </div>
        </NavLink>
      </div>
      <div className=" flex justify-center items-center py-6 ">
        <button>Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
