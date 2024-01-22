import React from "react";
import Header from "../components/common/Header";
import "./App.css";
import CartFooter from "../components/common/CartFooter";
import Products from "../components/products/products";
const App = () => {
  return (
    <>
      <Header />
      <Products />
      <CartFooter />
    </>
  );
};

export default App;
