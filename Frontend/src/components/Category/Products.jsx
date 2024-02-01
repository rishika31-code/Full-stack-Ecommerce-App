import formatNames from "../../functions/formatNames";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PORT } from "../../api/agent";
import axios from "axios";

const Products = () => {
  const { subid, id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:${PORT}/user/getproductbysubid?subid=${subid}&id=${id}`
        );
        console.log(data);
        setProducts(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [subid]);

  // navigating user to product details page

  const goToProductDetails = (prodId) => {
    navigate(`/category/${id}/${subid}/${prodId}`);
  };

  return (
    <>
      {loader ? (
        <h1>Loader</h1>
      ) : (
        <>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 m-2 mt-5 ">
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[20rem] flex flex-col gap-3 border px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    goToProductDetails(product.id);
                  }}
                  key={product.id}
                >
                  <div className="w-full h-[50%] sm:h-[60%] md:h-[45%] p-1 rounded-md ">
                    <img
                      src={product.imageUrls[0]}
                      className=" w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <p className=" font-semibold font-poppins w-fit">
                    {formatNames(product.name)}
                  </p>
                  <h1>
                    {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h1 className=" font-medium text-xl">
                      &#8377;{product.productTypes[0].price}
                    </h1>
                    <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
