import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CategoryPage from "../pages/CategoryPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import Account from "../components/Account/Account";
import { useSelector } from "react-redux";
import Search from "../components/Search/Search";
import AllCategories from "../components/AllCategories/AllCategories";
const MyRoutes = () => {
  const { isloggedIn } = useSelector((state) => state.authSlice);

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/categories" element={<AllCategories />} />
      <Route path="/product/:productid" element={<ProductDetailsPage />} />
      <Route path="/category/:id/:subid" element={<CategoryPage />} />
      <Route
        path="/category/:id/:subid/:productid"
        element={<ProductDetailsPage />}
      />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<HomePage />} />
      {isloggedIn && <Route path="/account/*" element={<Account />} />}
    </Routes>
  );
};

export default MyRoutes;
