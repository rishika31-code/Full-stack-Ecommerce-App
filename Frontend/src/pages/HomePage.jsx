import React from "react";
import TopBanner from "../components/Banners/TopBanner";
import AllCategory from "../components/Category/AllCategory";
import ProductsContainer from "../components/Products/ProductsContainer";
import MidBanner from "../components/Banners/MidBanner";

const HomePage = () => {
  return (
    <>
      <TopBanner />
      <MidBanner />
      <AllCategory />
      <ProductsContainer />
    </>
  );
};

export default HomePage;
