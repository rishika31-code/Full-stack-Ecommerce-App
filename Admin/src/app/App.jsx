import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import PageWrapper from "../components/Wrapper/PageWrapper";
import MyRoutes from "../Routes/MyRoutes";
import "./App.css";
import Auth from "../components/Auth/Auth";

const App = () => {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <SideBar />
          <PageWrapper>
            <MyRoutes />
          </PageWrapper>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default App;
