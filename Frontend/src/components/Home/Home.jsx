import TopBanner from "./TopBanner";
import MidBanner from "./MidBanner";
import AllCategory from "./AllCategory";
import ProductsContainer from "./ProductsContainer";
import CartFooter from "../Cart/CartFooter";

const Home = () => {
  return (
    <>
      <TopBanner />
      <MidBanner />
      <AllCategory />
      <ProductsContainer />
      <CartFooter />
    </>
  );
};

export default Home;
