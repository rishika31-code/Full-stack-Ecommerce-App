import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RiLoader3Fill } from "react-icons/ri";
import toast from "react-hot-toast";

import { createOrder, orderCompleted, orderFailed } from "../../api/agent";
import { setOffersEmpty } from "../../store/reducers/offerSlice";
import { setCartEmpty } from "../../store/reducers/cartSlice";

const PaymentButton = ({ address, appliedOffer }) => {
  const [btnLoader, setBtnLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createOrderHandler = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("User not found. Please log in again!");
      return;
    }

    if (!address) {
      toast.error("Address cannot be blank!");
      return;
    }

    setBtnLoader(true);

    try {
      // Create order on the server
      const { data } = await createOrder(appliedOffer, token);
      console.log("Order created:", data);

      const options = {
        key: data.key_id,
        order_id: data.order.id,
        name: "RedBubble",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0_P5pMDJo1r8zYSDslQKYw8ybDYqSKd-e_zDoudxRQ&s",
        handler: async (response) => {
          console.log("Payment success:", response);

          try {
            await orderCompleted(
              {
                orderId: options.order_id,
                paymentId: response.razorpay_payment_id,
                offerId: appliedOffer?.createdOfferId,
                address,
              },
              token
            );

            toast.success("Order completed!");

            if (appliedOffer) {
              dispatch(setOffersEmpty());
            }
            dispatch(setCartEmpty());

            setTimeout(() => {
              navigate(`/account/orders/${options.order_id}`);
            }, 500);
          } catch (error) {
            console.error("Error completing order:", error);
            toast.error("Order completion failed. Please try again.");
          }

          setBtnLoader(false);
        },
        prefill: {
          email: "user@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new Razorpay(options);
      razorpay.open();

      razorpay.on("payment.failed", async (response) => {
        console.error("Payment failed:", response);
        toast.error("Payment failed. Please try again.");

        try {
          await orderFailed(options.order_id, token);
        } catch (error) {
          console.error("Failed to mark order as failed:", error);
        }
      });
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Something went wrong while creating your order.");
    }

    setBtnLoader(false);
  };

  return (
    <div className="my-4 mx-2">
      {address ? (
        <button
          type="button"
          className="primary-bg-darker-pink text-white py-2 rounded-md w-full flex justify-center items-center"
          onClick={createOrderHandler}
          disabled={btnLoader}
        >
          {btnLoader ? (
            <RiLoader3Fill className="text-2xl animate-spin" />
          ) : (
            "CONTINUE TO PAYMENT"
          )}
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="bg-gray-400 text-white py-2 rounded-md w-full"
        >
          CONTINUE TO PAYMENT
        </button>
      )}
    </div>
  );
};

export default PaymentButton;


