import React from "react";
import { Route, Routes } from "react-router-dom";
// importing components
import Orders from "../components/Orders/Orders";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import SubCategory from "../components/SubCategory/SubCategory";
import ProductType from "../components/ProductType/ProductType";
import Offers from "../components/Offers/Offers";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Offers />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/subcategory" element={<SubCategory />} />
      <Route path="/producttypes" element={<ProductType />} />
      <Route path="/*" element={<Products />} />
    </Routes>
  );
};

export default MyRoutes;
