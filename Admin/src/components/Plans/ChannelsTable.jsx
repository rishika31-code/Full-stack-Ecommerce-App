import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ChannelsTable = ({ setSelectedChannel, setSelectedChannelPrice }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // for selecting multiple channels
  const handleCheckboxChange = (row) => {
    if (isSelected(row)) {
      // If the item is already selected, remove it from the list
      setSelectedItems(selectedItems.filter((item) => item.id !== row.id));

      // decrementing the selectedchannel and totalselected channel price
      setSelectedChannel((prev) => prev - 1);
      setSelectedChannelPrice((prev) => prev - Number(row.price));
    } else {
      // If the item is not selected, add it to the list
      setSelectedItems([
        ...selectedItems,
        {
          id: row.id,
          channelName: row.channelName,
          price: row.price,
          category: row.category,
        },
      ]);

      // incrementing the selectedchannel and totalselected channel price
      setSelectedChannel((prev) => prev + 1);
      setSelectedChannelPrice((prev) => prev + Number(row.price));
    }
  };

  const isSelected = (row) => selectedItems.some((item) => item.id === row.id);

  const dummyData = [
    {
      id: 1,
      slNo: 1,
      channelName: "Star Jalsa",
      price: 19,
      category: "Cable Tv",
    },
    {
      id: 2,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 3,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 4,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 5,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 6,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 2,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 7,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 8,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 2,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    {
      id: 9,
      slNo: 2,
      channelName: "Zee Bangla",
      price: 26,
      category: "Cable Tv",
    },
    // Add more dummy data as needed
  ];

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
                <p>Select</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }}>
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Sl No</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Channel Name</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Price</p>
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                <p>Category</p>
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
          {dummyData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Checkbox
                  checked={isSelected(row)}
                  onChange={() => handleCheckboxChange(row)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center ",
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <span className=" flex justify-center items-center font-poppins py-2">
                  {row.slNo}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-poppins py-2">
                  {row.channelName}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-poppins py-2">
                  {row.price}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-poppins py-2">
                  {row.category}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-poppins font-bold py-2">
                  <HiOutlineDotsVertical className="text-base cursor-pointer" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChannelsTable;
