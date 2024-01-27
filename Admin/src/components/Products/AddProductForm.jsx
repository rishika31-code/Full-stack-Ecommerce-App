import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const { categories, subCategories } = useSelector(
    (state) => state.categorySlice
  );
  const [name, setName] = useState("");
  const [imageURLs, setImageURLs] = useState(["", ""]);
  const [categoryId, setCategoryId] = useState(
    categories.length > 0 ? categories[0].id : ""
  );
  const [subCategoryId, setSubCategoryId] = useState(
    subCategories.length > 0 ? subCategories[0].id : ""
  );

  const handleImageChange = (index, value) => {
    const updatedImageURLs = [...imageURLs];
    updatedImageURLs[index] = value;
    setImageURLs(updatedImageURLs);
  };

  const addImageInput = () => {
    setImageURLs([...imageURLs, ""]);
  };

  const removeImageInput = (index) => {
    const updatedImageURLs = [...imageURLs];
    updatedImageURLs.splice(index, 1);
    setImageURLs(updatedImageURLs);
  };

  // for adding a new Product
  const handleAddProduct = (e) => {
    e.preventDefault();
    const addedProduct = {
      name,
      imageURLs,
      categoryId,
      subCategoryId,
    };
    console.log(addedProduct);
  };

  return (
    <form
      className="px-2 py-3 flex flex-col gap-2 font-poppins w-full"
      onSubmit={handleAddProduct}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="categoryname" className="text-lg">
          PRODUCT NAME
        </label>
        <input
          required
          type="text"
          placeholder="Enter name of the product"
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>

      {imageURLs.map((url, index) => (
        <div key={index} className="w-full flex flex-col gap-1">
          <label htmlFor={`imageurl${index + 1}`} className="text-lg">
            IMAGE URL {index + 1}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={`Enter image URL ${index + 1}`}
              className="w-full p-2 bg-gray-100 rounded-md"
              value={url}
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeImageInput(index)}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addImageInput}
        className="bg-green-500 text-white p-2 rounded-md"
      >
        Add Another Image
      </button>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className="text-lg">
          SELECT CATEGORY
        </label>
        <select
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => setCategoryId(e.target.value)}
          value={categoryId}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className="text-lg">
          SELECT SUBCATEGORY
        </label>
        <select
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => setSubCategoryId(e.target.value)}
          value={subCategoryId}
        >
          {subCategories.map((subCategory) => (
            <option key={subCategory.id} value={subCategory.id}>
              {subCategory.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className=" bg-pink-500 w-full text-white mt-5 flex justify-center items-center rounded-md py-2"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
