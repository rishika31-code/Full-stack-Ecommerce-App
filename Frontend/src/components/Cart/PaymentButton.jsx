const createOrderHandler = async () => {
  console.log("Creating Order..."); // 👈 Add this log

  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("User Not Found Login Again !");
    return;
  }

  if (!address) {
    toast.error("Address can't be blank !");
    return;
  }

  setBtnLoader(true);
  try {
    const { data } = await createOrder(appliedOffer, token);

    console.log("Order created successfully: ", data); // 👈 Add this too

    const options = {
      name: "RedBubble",
      key: data.key_id,
      order_id: data.order.id,
      image: "...",
      handler: async (response) => {
        console.log("Payment successful: ", response); // 👈 Log this too
        ...
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();

    rzp1.on("payment.failed", (res) => {
      console.error("Payment failed: ", res); // 👈 and log this
    });
  } catch (error) {
    console.log("Error creating order: ", error);
    toast.error("Payment Failed !");
  }
  setBtnLoader(false);
};

