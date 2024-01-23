import React from "react";
import { Route, Routes } from "react-router-dom";
import Orders from "../components/Orders/Orders";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/dashboard" element={<Orders />} />
    </Routes>
  );
};

export default MyRoutes;
