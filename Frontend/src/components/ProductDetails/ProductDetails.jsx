import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import ProductTypes from "./ProductTypes";
import ProductDescription from "./ProductDescription";
import Working from "./Working";
import { PORT } from "../../api/agent";
import Loader from "./Loader";
import CartFooter from "../Cart/CartFooter";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const { productid } = useParams();

  // useffect for fetch the product details
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:${PORT}/user/getproductdetails?id=${productid}`
        );
        setProduct(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      {error ? (
        <p>Error</p>
      ) : (
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
          <CartFooter />
        </>
      )}
    </>
  );
};

export default ProductDetails;
