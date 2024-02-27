import React from "react";

const GiveOfferForm = () => {
  return (
    <form className=" flex flex-col gap-2 mt-5">
      <div className=" flex flex-col gap-2">
        <label className=" text-lg">Select Offer</label>
        <select className=" bg-gray-100 p-2">
          <option>60% off on all orders </option>
        </select>
      </div>
      <div className=" flex flex-col gap-2">
        <label className=" text-lg">Select User</label>
        <select className=" bg-gray-100 p-2">
          <option>spathak7431@gmail.com</option>
          <option>spathak7431@gmail.com</option>
          <option>spathak7431@gmail.com</option>
        </select>
      </div>
    </form>
  );
};

export default GiveOfferForm;
