import { MdOutlineMyLocation } from "react-icons/md";
import GoogleMapView from "./GoogleMapView";
import { useState } from "react";

const AddAddressForm = () => {
  const [address, setAddress] = useState("Loading...");
  return (
    <div className=" flex justify-center items-start gap-4 px-2 font-poppins mt-2">
      <div className="w-1/2">
        <div className=" flex flex-col gap-1  p-2">
          <label className="font-semibold">Search Address</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="search any address"
          />
        </div>
        <div className=" w-full h-[35rem] p-2">
          <GoogleMapView setAddress={setAddress} />
        </div>
      </div>
      <div className="flex flex-col gap-3 h-full w-1/2">
        <div className=" flex flex-col gap-2">
          <h1 className=" font-semibold">Enter Location Information</h1>
          <div className="bg-[#6D4090] px-4 py-2 flex items-center gap-3 justify-center text-white rounded-md">
            <MdOutlineMyLocation className="text-2xl " />
            <div className=" flex flex-col gap-1 p-2">
              <p className=" text-sm">{address}</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-1 mt-5">
          <label>House Number & Floor</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="Enter house no & floor"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Building & Block Number </label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="Enter Building & block no"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Landmark & Area Name</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="Enter landmark & area name"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Address Label</label>
          <select type="text" className="w-full bg-gray-100 p-2 rounded-md">
            <option value={"home"}>Home</option>
            <option value={"work"}>Work</option>
            <option value={"others"}>Others</option>
          </select>
        </div>
        <button className="primary-bg-darker-pink py-3 rounded-md mt-5 text-center text-white justify-end">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default AddAddressForm;
