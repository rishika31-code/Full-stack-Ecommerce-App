import { useDispatch } from "react-redux";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addSubCategoryAction } from "../../store/actions/categoryActions";

const AddSubCategory = ({ showModal }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categorySlice);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [categoryId, SetCategoryId] = useState("");

  const onSubCategorySubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if (categoryId.trim()) {
      const subCategoryVal = {
        name,
        imageUrl,
        categoryId,
      };
      dispatch(addSubCategoryAction(subCategoryVal));
      setLoader(false);
      setName("");
      setImageUrl("");
      showModal(false);
    } else {
      toast.error("Please select category");
    }
  };

  return (
    <form
      className=" px-2 py-3 flex flex-col  gap-2 font-poppins w-full"
      onSubmit={onSubCategorySubmit}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="name" className=" text-lg">
          SUBCATEGORY NAME
        </label>
        <input
          type="text"
          placeholder="Name of the main category"
          className="w-full p-2 bg-gray-100 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className=" text-lg">
          IMAGE URL
        </label>
        <input
          type="text"
          placeholder="URL of the image"
          className="w-full p-2 bg-gray-100 rounded-md"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="category" className="text-lg">
          CATEGORY
        </label>
        <select
          className="text-black w-full p-2 bg-gray-100 rounded-md"
          value={categoryId}
          onChange={(e) => {
            SetCategoryId(e.target.value);
          }}
          required
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              className="text-black"
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button className="primary-linear-bg text-white mt-5 flex justify-center items-center  rounded-md py-2">
        {loader ? (
          <RiLoader3Fill className="text-2xl animate-spin" />
        ) : (
          "ADD SUBCATEGORY"
        )}
      </button>
    </form>
  );
};

export default AddSubCategory;
