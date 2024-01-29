import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default MyRoutes;
