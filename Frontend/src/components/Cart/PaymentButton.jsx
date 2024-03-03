import useCreateOrder from "../../hooks/useCreateOrder";

const PaymentButton = ({ address, appliedOffer }) => {
  return (
    <>
      {address ? (
        <button
          type="submit"
          className="primary-bg-darker-pink text-white py-2 rounded-md my-4 mx-2"
          onClick={() => {
            useCreateOrder(appliedOffer);
          }}
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
