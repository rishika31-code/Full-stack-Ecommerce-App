import { BiSolidOffer } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

const Coupons = () => {
  return (
    <div className=" w-full bg-white flex gap-2 justify-between items-center px-4 py-3 rounded-md shadow-md cursor-pointer border">
      <div className=" flex  gap-2 items-center">
        <BiSolidOffer className=" text-4xl text-green-500" />
        <h1>Avail Offer / Coupons</h1>
      </div>
      <IoMdArrowDropright className=" text-3xl primary-color-darker-pink" />
    </div>
  );
};

export default Coupons;
