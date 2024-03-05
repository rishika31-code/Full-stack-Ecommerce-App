import React from "react";
import { TbFaceIdError } from "react-icons/tb";
const Error = ({ component }) => {
  return (
    <div className=" h-full w-full flex justify-center items-center">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <h1 className=" font-poppins text-xl">
          Error while fething {component}
        </h1>
        <TbFaceIdError className="text-4xl" />
      </div>
    </div>
  );
};

export default Error;
