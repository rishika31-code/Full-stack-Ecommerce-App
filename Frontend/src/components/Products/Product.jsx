import { useNavigate } from "react-router-dom";
import formatNames from "../../functions/formatNames";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const getProductDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="w-[13rem] h-[20rem] flex flex-col gap-3 shadow-md border px-4 py-2 rounded-md "
      onClick={getProductDetails}
    >
      <div className="w-full h-[50%] ">
        <img
          src={product.imageUrls[0]}
          className=" w-full h-full object-contain rounded-md"
        />
      </div>
      <h1 className=" font-semibold">{formatNames(product.name)}</h1>
      <h1>{`${product.productTypes[0].type} | ${product.productTypes.length} options`}</h1>
      <div className="flex justify-between items-center">
        <h1 className=" font-medium text-xl">
          &#8377; {product.productTypes[0].price}
        </h1>
        <button className="primary-linear-bg text-white px-4 py-1 rounded-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
