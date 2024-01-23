import React from "react";

const ProductsWrapper = (props) => {
  return (
    <div className=" mt-5 min-[1400px]:w-[1400px] w-[90%] m-auto ">
      {props.children}
    </div>
  );
};

export default ProductsWrapper;
