import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import PageWrapper from "../components/Wrapper/PageWrapper";
import MyRoutes from "../Routes/MyRoutes";
import "./App.css";
import { useEffect } from "react";
import {
  getAllCategoriesAction,
  getAllSubcategoriesAction,
} from "../store/actions/categoryActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  // useffect for fetching all categories
  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllSubcategoriesAction());
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      <PageWrapper>
        <MyRoutes />
      </PageWrapper>
    </>
  );
};

export default App;
