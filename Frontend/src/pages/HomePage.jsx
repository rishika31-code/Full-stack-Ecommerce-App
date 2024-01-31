import React from "react";
import TopBanner from "../components/Banners/TopBanner";
import Carousel from "../components/Carousel/Carousel";
import banners from "../assets/constants/images";
import AllCategory from "../components/Category/AllCategory";
import ProductsContainer from "../components/Products/ProductsContainer";
const HomePage = () => {
  return (
    <>
      <TopBanner />
      {/* Prdoucts category carousel */}
      <Carousel>
        {banners.carouselBanners.map((item, index) => {
          return (
            <img
              key={index}
              src={item.link}
              className="w-[22rem] h-[12rem] md:w-[25rem] md:h-[10rem] xl:w-[30rem] xl:h-[15rem] 2xl:w-[32rem] 2xl:h-[18rem] cursor-pointer  rounded-xl object-cover "
            />
          );
        })}
      </Carousel>
      <AllCategory />
      <ProductsContainer />
    </>
  );
};

export default HomePage;
