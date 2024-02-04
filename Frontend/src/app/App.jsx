import React from "react";
import Header from "../components/common/Header";
import "./App.css";
import CartFooter from "../components/common/CartFooter";
import Wrapper from "../components/Wrapper/Wrapper";
import MyRoutes from "../routes/MyRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAction } from "../store/actions/categoryActions";
import { verifyUserAction } from "../store/actions/AuthActions";
const App = () => {
  const dispatch = useDispatch();

  // dispatching the action to get all the main categories & verify user
  useEffect(() => {
    dispatch(getCategoriesAction());

    const token = localStorage.getItem("token");
    if (token) {
      dispatch(verifyUserAction(token));
    }
  }, []);

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
