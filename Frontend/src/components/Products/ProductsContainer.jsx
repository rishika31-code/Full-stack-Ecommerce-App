import { MdNavigateNext } from "react-icons/md";
import Carousel from "../Carousel/Carousel";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const ProductsContainer = () => {
  const { categories } = useSelector((state) => state.categorySlice);
  const navigate = useNavigate();

  const navgigateCatgeory = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <>
      {categories.map((category) => {
        return (
          <div className="mt-10" key={category.id}>
            <div className="flex justify-between items-center font-semibold text-2xl">
              <h1>{category.name} </h1>
              <button
                className="flex justify-center items-center cursor-pointer text-pink-500"
                onClick={() => {
                  navgigateCatgeory(category.id);
                }}
              >
                <h1 className=" text-lg">See All </h1>
                <MdNavigateNext className="text-xl " />
              </button>
            </div>

            <Carousel>
              <div className=" flex items-center gap-4">
                {category.products &&
                  category.products.map((product) => {
                    return <Product product={product} key={product.id} />;
                  })}
              </div>
            </Carousel>
          </div>
        );
      })}
    </>
  );
};

export default ProductsContainer;
