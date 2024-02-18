import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import AddAddressModal from "./AddAddressModal";

const AllAddressModal = ({ showModal }) => {
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1300,
        xl: 1536,
      },
    },
  });

  // screen breakpoints
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const moreThanlg = useMediaQuery(theme.breakpoints.up("lg"));

  // modal styles
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:
      (isSmallScreen && "90%") ||
      (isMediumScreen && "70%") ||
      (isLargeScreen && "30%") ||
      (moreThanlg && "25%"),
    height: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "thin",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  return (
    <>
      {showAddAddressModal && (
        <AddAddressModal showModal={setShowAddAddressModal} />
      )}
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            className="primary-bg-darker-pink px-2 py-2 cursor-pointer rounded-md absolute top-0 right-0"
            onClick={() => {
              showModal(false);
            }}
          >
            <RxCross2 className="text-2xl text-white " />
          </button>

          <div className="px-6  flex flex-col gap-4 justify-center">
            <h1 className="text-center p-2 font-popins text-xl font-medium">
              Select an Address
            </h1>
            <button
              className=" flex items-center justify-start gap-2 border-t border-b w-full py-4 primary-color-darker-pink"
              onClick={() => {
                setShowAddAddressModal(true);
              }}
            >
              <IoMdAddCircleOutline className=" text-xl" />
              <span>Add a new address</span>
            </button>
            <h1>SAVED ADDRESSES</h1>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AllAddressModal;
