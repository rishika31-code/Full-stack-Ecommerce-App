import React from "react";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import AccountRoutes from "./AccountRoutes";
import { FaArrowLeftLong } from "react-icons/fa6";
const Account = () => {
  const navigate = useNavigate();

  // for navigating to home handeler
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className=" my-3 md:my-6 flex flex-col gap-4 px-10 rounded-md">
      <button
        className="w-fit primary-bg-darker-pink text-white px-4 py-2 rounded-md"
        onClick={navigateToHome}
      >
        <FaArrowLeftLong className=" text-xl" />
      </button>
      <div className=" border w-full h-full flex">
        <SideBar />
        <div className="overflow-y-scroll h-[45rem] w-full">
          <AccountRoutes />
        </div>
      </div>
    </div>
  );
};

export default Account;
