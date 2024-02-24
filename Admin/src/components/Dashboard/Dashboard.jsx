import React, { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineSendToMobile } from "react-icons/md";
import CreateOfferModal from "./Offers/CreateOfferModal";
const Dashboard = () => {
  const [createOfferModal, setCreateOfferModal] = useState(false);
  return (
    <>
      {createOfferModal && <CreateOfferModal showModal={setCreateOfferModal} />}
      <div>
        <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins flex gap-5">
          <div
            className="px-8 py-12 bg-gray-100 rounded-xl flex justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
              setCreateOfferModal(true);
            }}
          >
            <h1 className=" text-2xl">Create Offer</h1>
            <BiSolidOffer className="text-2xl text-green-400" />
          </div>
          <div className="px-8 py-12 bg-gray-100 rounded-xl flex justify-center items-center gap-2 cursor-pointer">
            <h1 className=" text-2xl">Give Offer</h1>
            <MdOutlineSendToMobile className="text-2xl text-blue-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
