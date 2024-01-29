import React from "react";
import Header from "../components/common/Header";
import "./App.css";
import CartFooter from "../components/common/CartFooter";
import Wrapper from "../components/Wrapper/Wrapper";
import MyRoutes from "../routes/MyRoutes";
const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <MyRoutes />
      </Wrapper>
      <CartFooter />
    </>
  );
};

export default App;
