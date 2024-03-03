import axios from "axios";
import toast from "react-hot-toast";
import { CREATE_ORDER, ORDER_COMPLETED } from "../api/agent";
const useCreateOrder = async (appliedOffer, address) => {
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
    // crateing the order
    const { data } = await axios.post(
      CREATE_ORDER,
      { offerId: appliedOffer && appliedOffer.createdOfferId },
      { headers: { token: token } }
    );

    // options
    const options = {
      key: data.key_id,
      order_id: data.order.id,
      handler: async (response) => {
        try {
          const data = await axios.post(
            ORDER_COMPLETED,
            {
              orderId: options.order_id,
              paymentId: response.razorpay_payment_id,
              offerId: appliedOffer && appliedOffer.createdOfferId,
              address,
            },
            { headers: { token: token } }
          );
          console.log(data);
          alert("order completed");
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
        await axios.post(
          "",
          { order_id: options.order_id },
          { headers: { token: token } }
        );
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default useCreateOrder;
