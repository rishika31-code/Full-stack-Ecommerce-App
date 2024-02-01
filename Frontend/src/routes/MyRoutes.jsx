import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CategoryPage from "../pages/CategoryPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/product/:productid" element={<ProductDetailsPage />} />
      <Route path="/category/:id/:subid" element={<CategoryPage />} />
      <Route
        path="/category/:id/:subid/:productid"
        element={<ProductDetailsPage />}
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default MyRoutes;
