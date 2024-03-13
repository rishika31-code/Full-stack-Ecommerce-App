import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductDetails/ProductCarousel";
import ProductTypes from "../components/ProductDetails/ProductTypes";
import ProductDescription from "../components/ProductDetails/ProductDescription";
import Working from "../components/ProductDetails/Working";
import { PORT } from "../api/agent";
import axios from "axios";
import Loader from "../components/ProductDetails/Loader";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const { productid } = useParams();

  // useffect for fetch the product details
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:${PORT}/user/getproductdetails?id=${productid}`
        );
        setProduct(data);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className=" px-2 mb-24 md:mb-0">
          <div className=" flex flex-col md:flex-row gap-4 mt-5 mb-5 ">
            <ProductCarousel images={product.imageUrls} />
            <ProductTypes
              productName={product.name}
              categoryName={product.mainCategory.name}
              productType={product.productTypes}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4  ">
            <ProductDescription description={product.description} />
            <Working />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
