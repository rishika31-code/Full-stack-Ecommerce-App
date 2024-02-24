import { useState } from "react";
import AllAddressModal from "./AllAddressModal";
import { useSelector } from "react-redux";
const Address = () => {
  const { addresses } = useSelector((state) => state.addressSlice);
  const [openAddressModal, setOpenAddressModal] = useState(false);
  // user selected address states
  const [addressId, setAddressId] = useState(
    addresses[0] ? addresses[0].id : null
  );
  const [addressLabel, setAddressLabel] = useState(
    addresses[0] ? addresses[0].address.label : ""
  );
  const [address, setAddress] = useState(
    addresses[0] ? addresses[0].address.stringFormat : "No Address Added"
  );

  return (
    <>
      {openAddressModal && (
        <AllAddressModal
          showModal={setOpenAddressModal}
          setAddressId={setAddressId}
          setAddressLabel={setAddressLabel}
          setAddress={setAddress}
        />
      )}
      <div className="w-full bg-white flex flex-col gap-1 py-4 px-2 rounded-md shadow-md border">
        <div className=" flex flex-col gap-2 px-2">
          <h1 className=" font-semibold">{addressLabel}</h1>
          <h1>{address}</h1>
        </div>
        <button
          className="flex px-2 mt-2 primary-color-darker-pink font-medium"
          onClick={() => {
            setOpenAddressModal(true);
          }}
        >
          {addresses[0] ? "CHANGE ADDRESS" : "ADD ADDRESS"}
        </button>
        {addressId ? (
          <button
            type="submit"
            className="primary-bg-darker-pink text-white py-2 rounded-md my-4 mx-2"
          >
            CONTINUE TO PAYEMNT
          </button>
        ) : (
          <button
            disabled
            className="bg-gray text-white py-2 rounded-md my-4 mx-2"
          >
            CONTINUE TO PAYEMNT
          </button>
        )}
      </div>
    </>
  );
};

export default Address;
