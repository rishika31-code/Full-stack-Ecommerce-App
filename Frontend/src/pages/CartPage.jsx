import { useEffect, useState } from "react";
import axios from "axios";
import { GET_CART } from "../api/agent";
import CartProduct from "../components/Cart/CartProduct";
import Coupons from "../components/Cart/Coupons";
import TotalAmount from "../components/Cart/TotalAmount";
import Address from "../components/Address/Address";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import EmptyCart from "../components/Cart/EmptyCart";
import { getAddreesesAction } from "../store/actions/addressAction";
import toast from "react-hot-toast";
const CartPage = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const { cartItems } = useSelector((state) => state.cartSlice);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      (async () => {
        try {
          const [cartResponse] = await Promise.all([
            axios.get(GET_CART, { headers: { token: token } }),
            dispatch(getAddreesesAction()),
          ]);
          const { data } = cartResponse;
          setCart(data);
          setLoader(false);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      toast.error("LogIn Again !");
    }
  }, [cartItems]);

  // calculating total item & price
  let price = 0;
  let totalItem = 0;

  cart.forEach((product) => {
    price += product.productType.price * product.quantity;
    totalItem += product.quantity;
  });

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          {cart.length == 0 ? (
            <EmptyCart />
          ) : (
            <div className=" mt-10 font-poppins">
              <div className=" text-xl  hidden md:flex justify-between items-center">
                <h1 className=" font-semibold"> Cart ({totalItem} Items) </h1>
                <button className="  px-2 py-1 border border-red-500 rounded-md text-base">
                  Empty Cart
                </button>
              </div>

              <div className="mt-5 flex items-start gap-5">
                <div className="  w-[60%] h-fit  max-h-[40rem] rounded-md px-4 py-4 flex flex-col justify-center gap-2 overflow-y-scroll shadow-md border  ">
                  {cart.map((values) => {
                    return (
                      <CartProduct
                        key={values.id}
                        name={values.productType.product.name}
                        imageUrl={JSON.parse(
                          values.productType.product.imageUrls
                        )}
                        productTypeId={values.productTypeId}
                        type={values.productType.type}
                        price={values.productType.price}
                      />
                    );
                  })}
                </div>
                <div className="w-[40%] h-[40rem] rounded-md flex flex-col gap-4">
                  <Coupons />
                  <TotalAmount price={price} />
                  <Address />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartPage;
