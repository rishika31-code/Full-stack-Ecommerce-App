import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";

const AddProductType = () => {
  const { products } = useSelector((state) => state.productSlice);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);

  //  if there are products we take first as default
  const [selectProduct, setSelectProduct] = useState(
    products ? products[0].name : ""
  );

  const dispatch = useDispatch();

  return (
    <form className=" px-2 py-3 flex flex-col  gap-2 font-poppins w-full">
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className="text-lg">
          SELECT PRODUCT
        </label>
        <select
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => setSelectProduct(e.target.value)}
          value={selectProduct}
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="categoryname" className=" text-lg">
          PRODUCT TYPE
        </label>
        <input
          type="text"
          placeholder="Product Unit (ex : 100ml , 1kg , 500gm)"
          className="w-full p-2 bg-gray-100 rounded-md"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className=" text-lg">
          PRICE
        </label>
        <input
          type="number"
          placeholder="Product Price"
          className="w-full p-2 bg-gray-100 rounded-md"
          required
        />
      </div>

      <button className="primary-linear-bg text-white mt-5 flex justify-center items-center  rounded-md py-2">
        {btnLoader ? (
          <RiLoader3Fill className="text-2xl animate-spin" />
        ) : (
          "Add Type"
        )}
      </button>
    </form>
  );
};

export default AddProductType;
