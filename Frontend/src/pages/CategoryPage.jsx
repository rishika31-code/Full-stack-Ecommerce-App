import React, { useEffect, useState } from "react";
import SideBar from "../components/Category/SideBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PORT } from "../api/agent";
import Products from "../components/Category/Products";
import Loader from "../components/Loader/Loader";
const CategoryPage = () => {
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
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="flex">
            <SideBar categories={categories} path={id} />
            <Products />
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
