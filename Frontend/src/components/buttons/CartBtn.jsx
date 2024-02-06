import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../store/actions/cartActions";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const CartBtn = ({ id }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartSlice);
  const [quantity, setQunatity] = useState(
    cartItems[id] ? cartItems[id].quantity : 0
  );
  useEffect(() => {
    setQunatity(cartItems[id] ? cartItems[id].quantity : 0);
  }, [cartItems]);

  // add to cart handeler
  const addToCartHandeler = (e) => {
    e.stopPropagation();

    const addedItem = {
      quantity: quantity + 1,
      productTypeId: id,
    };
    console.log(addedItem);
    dispatch(addToCartAction(addedItem, setQunatity));
  };

  const increasQantity = () => {};

  const decreaseQantity = () => {};

  return (
    <div>
      {quantity == 0 ? (
        <button
          className="primary-bg-darker-pink text-white px-4 py-1 rounded-md"
          onClick={addToCartHandeler}
        >
          Add
        </button>
      ) : (
        <div className=" flex justify-center items-center gap-2 primary-bg-darker-pink text-white px-2 py-1 rounded-md text-xl ">
          <button onClick={increasQantity}>
            <FiMinus />
          </button>
          <h1 className=" text-lg">{quantity}</h1>
          <button onClick={decreaseQantity}>
            <FiPlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartBtn;
