import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import PageWrapper from "../components/Wrapper/PageWrapper";
import MyRoutes from "../Routes/MyRoutes";
import "./App.css";
import useFetchAllData from "../hooks/useFetchAllData";
const App = () => {
  // invoking the custom hook to fecth all data
  useFetchAllData();

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
