import React from "react";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
const CartFooter = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);

  // calculating total item & price in the cart
  let totalItems = 0;
  let price = 0;

  Object.values(cartItems).forEach((values) => {
    price += values.productType.price * values.quantity;
    totalItems += values.quantity;
  });

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" flex primary-bg-darker-pink text-2xl text-white min-[600px]:hidden fixed bottom-0 z-30 justify-between items-center primary-bg-darker gap-4 px-7 py-3 font-poppins w-[95%] rounded-xl">
        <div className=" flex justify-center items-center gap-2 ">
          <h1>{totalItems} Items</h1>
          <h1>|</h1>
          <div className=" flex justify-center items-center">
            <PiCurrencyInrDuotone className="text-3xl" />
            <h1>{price}</h1>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-2 bg-blue-900 rounded-xl px-4 py-3">
          <h1>View Cart</h1>
          <IoCart className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
