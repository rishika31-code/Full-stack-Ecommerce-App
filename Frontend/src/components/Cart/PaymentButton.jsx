import toast from "react-hot-toast";
import { createOrder, orderCompleted, orderFailed } from "../../api/agent";
import { useNavigate } from "react-router-dom";
import { setOffersEmpty } from "../../store/reducers/offerSlice";
import { setCartEmpty } from "../../store/reducers/cartSlice";
import { useDispatch } from "react-redux";

const PaymentButton = ({ address, appliedOffer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // when user want to create the order
  const createOrderHandeler = async () => {
    const token = localStorage.getItem("token");

    // if token is not found
    if (!token) {
      toast.error("User Not Found Login Again !");
      return;
    }

    // if address is not found
    if (!address) {
      toast.error("Address can't be blank !");
      return;
    }

    try {
      // creating the order
      const { data } = await createOrder(appliedOffer, token);

      // options
      const options = {
        key: data.key_id,
        order_id: data.order.id,
        handler: async (response) => {
          try {
            const data = await orderCompleted(
              {
                orderId: options.order_id,
                paymentId: response.razorpay_payment_id,
                offerId: appliedOffer && appliedOffer.createdOfferId,
                address,
              },
              token
            );
            toast.success("Order Completed");
            // if user apply some offer we have to clear
            if (appliedOffer) {
              dispatch(setOffersEmpty());
            }

            // clearing the cart
            dispatch(setCartEmpty());
            // navigating to orders page
            navigate(`/account/orders/${options.order_id}`);
          } catch (error) {
            console.error("Error completing order");
            toast.error("Order completion failed. Please try again.");
          }
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();

      // if the payment is failed
      rzp1.on("payment.failed", async (res) => {
        try {
          await orderFailed(options.order_id, token);
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Payment Failed !");
    }
  };

  return (
    <>
      {address ? (
        <button
          type="submit"
          className="primary-bg-darker-pink text-white py-2 rounded-md my-4 mx-2"
          onClick={createOrderHandeler}
        >
          CONTINUE TO PAYEMNT
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-400 text-white py-2 rounded-md my-4 mx-2"
        >
          CONTINUE TO PAYEMNT
        </button>
      )}
    </>
  );
};

export default PaymentButton;
