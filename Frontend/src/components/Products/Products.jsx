import React, { useRef } from "react";
import banners from "../../assets/constants/images";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Carousel from "../Carousel/Carousel";
import ProductsCategory from "./ProductsCategory";

const Products = () => {
  const posterContainer = useRef();

  // when user want to scroll right
  const onClickNextArrow = () => {
    const box = posterContainer.current;
    box.scrollTo({
      left: box.scrollLeft + 1000,
      behavior: "smooth",
    });
  };

  // when user want to scroll left
  const onClickPrevArrow = () => {
    const box = posterContainer.current;
    box.scrollTo({
      left: box.scrollLeft - 1000,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top Banner */}
      <div>
        <img src={banners.topBanner} className="w-full" />
      </div>

      {/* Prdoucts category carousel */}
      <Carousel>
        {banners.carouselBanners.map((item, index) => {
          return (
            <img
              key={index}
              src={item.link}
              className="w-[20rem] h-[8rem] md:w-[25rem] md:h-[10rem] xl:w-[30rem] xl:h-[15rem] 2xl:w-[32rem] 2xl:h-[18rem] cursor-pointer  rounded-xl object-cover "
            />
          );
        })}
      </Carousel>
      <ProductsCategory />
    </>
  );
};

export default Products;
