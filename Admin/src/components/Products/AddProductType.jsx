import { useDispatch } from "react-redux";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";

const AddProductType = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);
  const dispatch = useDispatch();

  return (
    <form className=" px-2 py-3 flex flex-col  gap-2 font-poppins w-full">
      <div className="flex gap-2">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="categoryname" className=" text-lg">
            PRODUCT UNIT
          </label>
          <input
            type="text"
            placeholder="Product Unit"
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
      </div>

      <button className="primary-linear-bg text-white mt-5 flex justify-center items-center  rounded-md py-2">
        {btnLoader ? (
          <RiLoader3Fill className="text-2xl animate-spin" />
        ) : (
          "Add a New Category"
        )}
      </button>
    </form>
  );
};

export default AddProductType;
