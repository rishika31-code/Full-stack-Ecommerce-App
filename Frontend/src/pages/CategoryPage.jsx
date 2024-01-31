import React, { useEffect, useState } from "react";
import SideBar from "../components/Category/SideBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PORT } from "../api/agent";
const CategoryPage = () => {
  const [categories, setCatgeories] = useState([]);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:${PORT}/user/getcategorybyid?id=${Number(id)}`
        );
        setCatgeories(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div>
      {loader ? (
        <h1>loader</h1>
      ) : (
        <>
          <SideBar categories={categories} path={id} />
        </>
      )}
    </div>
  );
};

export default CategoryPage;
