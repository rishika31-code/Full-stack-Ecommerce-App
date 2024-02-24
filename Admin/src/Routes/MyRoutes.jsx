import React from "react";
import { Route, Routes } from "react-router-dom";
// importing components
import Orders from "../components/Orders/Orders";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import SubCategory from "../components/SubCategory/SubCategory";
import ProductType from "../components/ProductType/ProductType";
import Dashboard from "../components/Dashboard/Dashboard";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/subcategory" element={<SubCategory />} />
      <Route path="/producttypes" element={<ProductType />} />
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  );
};

export default MyRoutes;
