import { useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import PlansTable from "./PlansTable";
import PlansModal from "./PlansModal";
import { TablePagination } from "@mui/material";

const Plans = () => {
  const [cableSeleted, setCableSelected] = useState(false);
  const [showPlanAddModal, setShowAddPlanModal] = useState(false);

  // pagination things
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addUserModal, setAddUserModal] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {showPlanAddModal && <PlansModal showModal={setShowAddPlanModal} />}
      <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <div className="flex">
          <div>
            <button
              className={` border-y border-l rounded-tl-md rounded-bl-md cursor-pointer border-gray-400 text-xl px-4 py-1 ${
                cableSeleted ? "primary-linear-bg text-white" : "bg-white"
              }`}
              onClick={() => {
                setCableSelected(true);
              }}
            >
              Cable Tv
            </button>
          </div>
          <div>
            <button
              className={`border rounded-tr-md rounded-br-md  cursor-pointer border-gray-400 text-xl px-4 py-1 ${
                !cableSeleted ? "primary-linear-bg text-white" : "bg-white"
              }`}
              onClick={() => {
                setCableSelected(false);
              }}
            >
              Boardband
            </button>
          </div>
          <button
            className="primary-linear-bg py-1 px-2 ml-5 rounded-md  text-white"
            onClick={() => {
              setShowAddPlanModal(true);
            }}
          >
            <MdOutlineAddToPhotos className="text-2xl" />
          </button>
        </div>

        <div className=" mt-7 flex flex-col min-[900px]:flex-row justify-center gap-4 min-[900px]:gap-0  min-[900px]:justify-between items-center ">
          <div className="flex justify-start items-center bg-gray-100 px-2 py-1 w-full min-[900px]:w-[40%] rounded-md">
            <CgSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search Any Plan by name"
              className=" px-2 py-2 bg-gray-100 w-full outline-none"
            />
          </div>
          <div className=" rounded-md font-poppins">
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>

      {/* PLANS TABLE  */}

      <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <PlansTable />
      </div>
    </>
  );
};

export default Plans;
