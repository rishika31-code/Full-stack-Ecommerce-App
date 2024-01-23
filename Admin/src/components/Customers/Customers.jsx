import { useState } from "react";
import Switch from "@mui/material/Switch";
import { TbUsersPlus } from "react-icons/tb";
import { CgSearch } from "react-icons/cg";
import { BsFilterSquare } from "react-icons/bs";
import AddCustomerModal from "./AddCustomerModal";
import CustomerTable from "./CustomerTable";

const Customers = () => {
  const [addUserModal, setAddUserModal] = useState(false);
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {addUserModal && (
        <AddCustomerModal showModal={setAddUserModal} isBoardband={checked} />
      )}
      <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <div className="  text-xl flex justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <div className="flex justify-start items-center">
              <h1>Cable TV</h1>
              <Switch
                checked={checked}
                sx={{
                  color: "blue",
                  borderRadius: "10px",
                  width: "3.5rem",
                }}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <h1>Boardband</h1>
            </div>
            <button
              className="primary-linear-bg py-1 px-2 rounded-md  text-white"
              onClick={() => {
                setAddUserModal(true);
              }}
            >
              <TbUsersPlus className="text-2xl" />
            </button>
          </div>
          <div>
            <select className=" px-5  bg-gray-100 rounded-md">
              <option>15</option>
              <option>20</option>
              <option>40</option>
              <option>50</option>
            </select>
          </div>
        </div>
        <div>
          <div className=" mt-10 flex flex-col min-[900px]:flex-row justify-center gap-4 min-[900px]:gap-0  min-[900px]:justify-between items-center ">
            <div className="flex justify-start items-center bg-gray-100 px-2 py-1 w-full min-[900px]:w-[30%] rounded-md">
              <CgSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search Any User by Name or Id"
                className=" px-2 py-2 bg-gray-100 w-full outline-none"
              />
            </div>
            <div className=" flex gap-4 justify-center items-center">
              <select className=" px-3 py-3 flex justify-center items-center gap-2 bg-gray-100 rounded-md">
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <select className=" px-3 py-3 flex justify-center items-center gap-2 bg-gray-100 rounded-md">
                <option>Area</option>
                <option>Lakhisagar</option>
                <option>Simlapal</option>
                <option>Jamda</option>
                <option>Baurisole</option>
              </select>
              <select className=" px-3 py-3 flex justify-center items-center gap-2 bg-gray-100 rounded-md">
                <option>Employee</option>
                <option>Rajesh</option>
                <option>Sourav</option>
                <option>Supriya</option>
              </select>
              <button className="primary-linear-bg px-3 py-3 rounded-md  text-white">
                <BsFilterSquare className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-18rem)] m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <CustomerTable />
      </div>
    </>
  );
};

export default Customers;
