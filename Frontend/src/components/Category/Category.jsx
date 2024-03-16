import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PORT } from "../../api/agent";
import axios from "axios";
import SideBar from "./SideBar";
import Products from "./Products";
import CartFooter from "../Cart/CartFooter";

const Category = () => {
  const [categories, setCatgeories] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  // useeffect for fetching all the subcategory data that relateed to maincategory
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:${PORT}/user/getcategorybyid?id=${Number(id)}`
        );
        setCatgeories(data);
        setLoader(false);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <div className="flex">
        <SideBar categories={categories} path={id} />
        <Products />
      </div>
      <CartFooter />
    </>
  );
};

export default Category;
