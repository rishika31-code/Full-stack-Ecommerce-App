import React from "react";
import Header from "../components/common/Header";
import "./App.css";
import CartFooter from "../components/common/CartFooter";
import Products from "../components/Products/Products";
import ProductsWrapper from "../components/Wrapper/ProductsWrapper";
const App = () => {
  return (
    <>
      <Header />
      <ProductsWrapper>
        <Products />
      </ProductsWrapper>
      <CartFooter />
    </>
  );
};

export default App;
