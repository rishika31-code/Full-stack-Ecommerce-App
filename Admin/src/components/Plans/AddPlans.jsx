import { CgSearch } from "react-icons/cg";
import ChannelsTable from "./ChannelsTable";
import { useState } from "react";
import AddChannelModal from "./AddChannelModal";
const AddPlans = ({ setSelectedChannel, setSelectedChannelPrice }) => {
  const [showAddChannel, setShowAddChannel] = useState(false);
  return (
    <>
      {showAddChannel && <AddChannelModal showModal={setShowAddChannel} />}
      <div className=" px-4 py-2 flex flex-col gap-4">
        <div className="  font-poppins flex gap-5">
          <div className=" w-full">
            <label htmlFor="number" className=" text-lg">
              Plan Name
            </label>
            <input
              type="text"
              placeholder="Enter new plan name"
              className="w-full p-2 bg-gray-100 rounded-md"
              required
            />
          </div>
          <div className=" w-full">
            <label htmlFor="number" className=" text-lg">
              Plan Id
            </label>
            <input
              type="number"
              placeholder="Plan id should be unique"
              className="w-full p-2 bg-gray-100 rounded-md"
              required
            />
          </div>
          <div className=" w-full">
            <label htmlFor="number" className=" text-lg">
              Category
            </label>
            <input
              type="text"
              placeholder="category"
              className="w-full p-2 bg-gray-100 rounded-md"
              disabled
              value={"Cable Tv"}
            />
          </div>
        </div>
        <div className=" flex gap-4">
          <div className="flex justify-start items-center bg-gray-100 px-2 w-[70%]  rounded-md">
            <CgSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search Any Plan by name"
              className=" px-2 py-2 bg-gray-100 w-full outline-none"
            />
          </div>
          <button
            className="primary-linear-bg text-white w-[30%] rounded-md py-1"
            onClick={() => setShowAddChannel(true)}
          >
            Add a New Channel
          </button>
        </div>
      </div>

      <div className=" px-4 py-2 h-[28rem]">
        <ChannelsTable
          setSelectedChannelPrice={setSelectedChannelPrice}
          setSelectedChannel={setSelectedChannel}
        />
      </div>
    </>
  );
};

export default AddPlans;
