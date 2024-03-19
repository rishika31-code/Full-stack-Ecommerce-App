import { Route, Routes } from "react-router-dom";
// importing components
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import SubCategory from "../components/SubCategory/SubCategory";
import ProductType from "../components/ProductType/ProductType";
import Offers from "../components/Offers/Offers";
import Auth from "../components/Auth/Auth";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/offers" element={<Offers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/subcategory" element={<SubCategory />} />
      <Route path="/producttypes" element={<ProductType />} />
      <Route path="*" element={<Products />} />
    </Routes>
  );
};

export default MyRoutes;
