import React from "react";
import banners from "../../assets/constants/images";
import { MdNavigateNext } from "react-icons/md";

// hard coded categories
const AllCategory = () => {
  return (
    <div className="mt-10 font-poppins">
      <div className="flex justify-between items-center font-semibold text-2xl">
        <h1>Explore By Category </h1>
        <div className="flex justify-center items-center cursor-pointer text-pink-500">
          <h1>See All </h1>
          <MdNavigateNext className="text-xl " />
        </div>
      </div>
      <div className="mt-7 flex flex-col justify-center gap-5">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex gap-8 items-center justify-between">
            {banners.categoryBanners[0].map((item, index) => (
              <img
                src={item.link}
                key={index}
                className=" h-[14rem] w-[15rem] min-[500px]:w-[11rem] min-[500px]:h-[15rem] md:w-[7rem] md:h-[9rem] min-[980px]:h-[11rem] min-[980px]:w-[9rem]  xl:w-[10rem] xl:h-[13rem]"
              />
            ))}
          </div>
          <div className="flex gap-8 items-center justify-between">
            {banners.categoryBanners[1].map((item, index) => (
              <img
                src={item.link}
                key={index}
                className=" h-[12rem] w-[16rem] min-[500px]:w-[11rem] min-[500px]:h-[15rem] md:w-[7rem] md:h-[9rem] min-[980px]:h-[11rem] min-[980px]:w-[9rem]  xl:w-[10rem] xl:h-[13rem]"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex gap-8 justify-between items-center">
            {banners.categoryBanners[2].map((item, index) => (
              <img
                src={item.link}
                key={index}
                className=" h-[12rem] w-[16rem] min-[500px]:w-[11rem] min-[500px]:h-[15rem] md:w-[7rem] md:h-[9rem]  min-[980px]:h-[11rem] min-[980px]:w-[9rem] xl:w-[10rem] xl:h-[13rem]"
              />
            ))}
          </div>
          <div className="flex gap-8 items-center justify-between">
            {banners.categoryBanners[3].map((item, index) => (
              <img
                src={item.link}
                key={index}
                className=" h-[12rem] w-[16rem] min-[500px]:w-[11rem] min-[500px]:h-[15rem] md:w-[7rem] md:h-[9rem] min-[980px]:h-[11rem] min-[980px]:w-[9rem]  xl:w-[10rem] xl:h-[13rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
