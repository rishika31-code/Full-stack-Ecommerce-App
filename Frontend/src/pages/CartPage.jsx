import { useState } from "react";
import CartProduct from "../components/Cart/CartProduct";
import Coupons from "../components/Cart/Coupons";
import TotalAmount from "../components/Cart/TotalAmount";
import Address from "../components/Address/Address";
import { useSelector } from "react-redux";
import EmptyCart from "../components/Cart/EmptyCart";
import useFetchCartDetails from "../hooks/useFetchCartDetails";
import PaymentButton from "../components/Cart/PaymentButton";
import PageLoader from "../components/common/PageLoader";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const { addresses } = useSelector((state) => state.addressSlice);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [loader1, setLoader1] = useState(true);
  const [loader2, setLoader2] = useState(true);
  const [cartData, setCartData] = useState(null);
  const [appliedOffer, setAppliedOffer] = useState(null);
  const [address, setAddress] = useState(null);

  // using custom hook to fecth cart details
  useFetchCartDetails(
    cartItems,
    setLoader1,
    setLoader2,
    setCart,
    setCartData,
    setAppliedOffer,
    setAddress
  );

  return (
    <>
      {loader1 && loader2 ? (
        <PageLoader />
      ) : (
        <>
          {cart.length == 0 ? (
            <EmptyCart />
          ) : (
            <div className=" mt-10 font-poppins">
              <div className=" text-xl  hidden md:flex justify-between items-center">
                <h1 className=" font-semibold">
                  Cart ({cartData.totalItems} Items)
                </h1>
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
                  <Coupons
                    appliedOffer={appliedOffer}
                    setAppliedOffer={setAppliedOffer}
                    price={cartData.totalPrice}
                  />
                  <TotalAmount
                    price={cartData.totalPrice}
                    appliedOffer={appliedOffer}
                  />
                  <div className="w-full bg-white flex flex-col gap-1 py-4 px-2 rounded-md shadow-md border">
                    <Address address={address} setAddress={setAddress} />
                    <PaymentButton
                      address={address}
                      appliedOffer={appliedOffer}
                    />
                  </div>
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
