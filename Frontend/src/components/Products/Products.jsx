import React from "react";
import { banners } from "../../assets/constants/images";

const Products = () => {
  return (
    <div className=" mt-5 min-[1400px]:w-[1400px] w-[96%] m-auto">
      <div>
        <img src={banners.topBanner} className="w-full" />
      </div>
    </div>
  );
};

export default Products;
