import { CgSearch } from "react-icons/cg";
import { IoCart } from "react-icons/io5";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { GrFormPrevious } from "react-icons/gr";
const Header = () => {
  return (
    <header>
      <div className=" flex justify-between items-center primary-bg-darker gap-4 px-10 py-4 font-poppins">
        <div className="">
          <h1 className="text-3xl text-orange-500 font-bold">RedBubble</h1>
          <h1 className="text-md ml-7  text-white">Kolkata , 700001</h1>
        </div>
        {/* <div className=" min-[600px]:hidden flex-col text-white ">
          <GrFormPrevious className="text-5xl" />
        </div> */}

        <div className="flex justify-start items-center bg-gray-100 px-2 py-3 w-full min-[600px]:w-[60%] rounded-md">
          <CgSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search Any Product by name"
            className=" px-2 bg-gray-100 w-full outline-none"
          />
        </div>
        <div className=" bg-pink-600 px-6 py-1 rounded-md text-white hidden min-[600px]:flex justify-center items-center gap-2 cursor-pointer">
          <IoCart className="text-5xl" />
          <h1 className=" text-3xl">|</h1>
          <div className=" flex flex-col justify-center items-center">
            <h1>3 Items</h1>
            <div className="flex justify-center items-center text-base">
              <PiCurrencyInrDuotone />
              <h1>220</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
