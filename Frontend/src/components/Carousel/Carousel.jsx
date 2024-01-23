import { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Carousel = (props) => {
  const carouselContainer = useRef();

  // when user want to scroll right
  const onClickNextArrow = () => {
    const box = carouselContainer.current;
    box.scrollTo({
      left: box.scrollLeft + 1000,
      behavior: "smooth",
    });
  };

  // when user want to scroll left
  const onClickPrevArrow = () => {
    const box = carouselContainer.current;
    box.scrollTo({
      left: box.scrollLeft - 1000,
      behavior: "smooth",
    });
  };

  return (
    <div className=" relative">
      <div
        className=" mt-10 flex gap-7 items-center w-full overflow-y-hidden overflow-x-scroll carousel-container "
        ref={carouselContainer}
      >
        <button
          className=" absolute top-[40%] right-0 z-20 bg-white text-pink-600 rounded-full cursor-pointer shadow-xl"
          onClick={onClickNextArrow}
        >
          <MdNavigateNext className="text-4xl" />
        </button>
        <button
          className=" absolute top-[40%] left-0 z-20 bg-white text-pink-600 rounded-full cursor-pointer shadow-xl"
          onClick={onClickPrevArrow}
        >
          <GrFormPrevious className="text-4xl" />
        </button>

        {props.children}
      </div>
    </div>
  );
};

export default Carousel;
