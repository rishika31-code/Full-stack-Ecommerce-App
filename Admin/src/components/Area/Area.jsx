import { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { MdOutlineAddLocation } from "react-icons/md";
import AreaTable from "./AreaTable";
import AddAreaModal from "./AddAreaModal";

const Area = () => {
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
      {addUserModal && <AddAreaModal setAddUserModal={setAddUserModal} />}
      <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <div className=" flex flex-wrap justify-between items-end">
          <div className=" w-[20rem] h-40 bg-gray-200 flex  justify-center items-center gap-5 rounded-xl">
            <div className=" flex flex-col justify-center items-center gap-2">
              <h1 className=" text-xl">Total Area</h1>
              <h1 className=" text-xl font-semibold">20</h1>
            </div>
            <button
              className="primary-linear-bg px-4 py-2 rounded-md"
              onClick={() => {
                setAddUserModal(true);
              }}
            >
              <MdOutlineAddLocation className="text-3xl text-white cursor-pointer" />
            </button>
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
      <div className="w-full m-auto h-[calc(100vh-20rem)] mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <AreaTable />
      </div>
    </>
  );
};

export default Area;
