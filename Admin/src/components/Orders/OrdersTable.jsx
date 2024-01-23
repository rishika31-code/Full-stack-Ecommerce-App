import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OrdersTable = () => {
  return (
    <TableContainer component={Paper} sx={{ height: "100%" }}>
      <Table aria-label="simple table" size="small">
        <TableHead
          sx={{
            backgroundColor: "#F3F4F6",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <TableRow>
            <TableCell style={{ fontWeight: 900 }}>
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Email</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }}>
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Name</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Product Id</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Category</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Quantity</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Order Value</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Status</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Action</p>
              </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* NOW WE HAVE 2 DUMMY USER  */}
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <span className=" flex justify-center items-center font-poppins py-2">
                spathak7431@gmail.com
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              <span className=" flex justify-center items-center font-poppins py-2">
                Sourav Pathak
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                212
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                Coldrinks & Bevarages
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                5
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                350
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2 text-green-500">
                Pending
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins font-bold py-2">
                <HiOutlineDotsVertical className="text-base cursor-pointer" />
              </span>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <span className=" flex justify-center items-center font-poppins py-2">
                spathak7431@gmail.com
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              <span className=" flex justify-center items-center font-poppins py-2">
                Rajesh Smp
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                212
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                Coldrinks & Bevarages
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                5
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2">
                350
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins py-2 text-green-500">
                Pending
              </span>
            </TableCell>
            <TableCell align="right">
              <span className=" flex justify-center items-center font-poppins font-bold py-2">
                <HiOutlineDotsVertical className="text-base cursor-pointer" />
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
