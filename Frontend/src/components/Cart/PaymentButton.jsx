import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PaymentButton = ({ appliedOffer }) => {
  const [showForm, setShowForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "",
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!orderDetails.name || !orderDetails.address || !orderDetails.phone || !orderDetails.paymentMethod) {
      toast.error("Please fill in all the details!");
      return;
    }

    // Show the "Place Order" button after the user submits the form
    setShowForm(false);
  };

  const handlePlaceOrder = () => {
    // Here you would typically send the order data to the backend (using an API)
    console.log("Order details:", orderDetails);

    // Assuming the order was placed successfully
    toast.success("Order placed successfully!");

    setIsOrderPlaced(true);

    // Optionally, navigate to the order confirmation page after a delay
    setTimeout(() => {
      navigate(`/account/orders`);
    }, 2000);
  };

  return (
    <div className="my-4 mx-2">
      {isOrderPlaced ? (
        <div className="text-center text-green-500">
          <h2>Order Successfully Placed!</h2>
          <p>Redirecting to your orders...</p>
        </div>
      ) : (
        <>
          {!showForm ? (
            <button
              type="button"
              className="primary-bg-darker-pink text-white py-2 rounded-md w-full flex justify-center items-center"
              onClick={() => setShowForm(true)}
            >
              CONTINUE TO PAYMENT
            </button>
          ) : (
            <div className="p-4 border rounded-md">
              <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={orderDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={orderDetails.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={orderDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="block">Payment Method</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={orderDetails.paymentMethod}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a payment method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cashOnDelivery">Cash on Delivery</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Submit Details
                </button>
              </form>
            </div>
          )}

          {showForm && !isOrderPlaced && orderDetails.name && orderDetails.address && orderDetails.phone && orderDetails.paymentMethod && (
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 w-full"
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentButton;



