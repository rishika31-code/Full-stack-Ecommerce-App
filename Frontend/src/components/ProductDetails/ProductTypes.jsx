import React from "react";

const ProductTypes = ({ productName, productType, categoryName }) => {
  return (
    <div className=" font-semibold flex flex-col w-full gap-4 px-3 pb-5 border-gray-300 border-b">
      <div className=" flex flex-col ">
        <div className="primary-color-darker-pink flex gap-2">
          <p className=" hover:text-blue-600 cursor-pointer"> Products </p>
          <p className=" hover:text-blue-600 cursor-pointer">{`> ${categoryName} > `}</p>
          <p>{productName}</p>
        </div>
        <h1 className="text-2xl font-semibold">{productName}</h1>
      </div>
      {productType.map((values) => {
        return (
          <div
            key={values.id}
            className=" flex justify-between items-center bg-gray-100 py-2 px-4 rounded-md"
          >
            <div className=" flex flex-col">
              <h1>{values.type}</h1>
              <p className="text-xl">MRP &#8377;{Number(values.price)}</p>
              <p>(Inclusive of all taxes)</p>
            </div>
            <button className="primary-bg-darker-pink px-5 py-1 rounded-md text-white">
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTypes;
