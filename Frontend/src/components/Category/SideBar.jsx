import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ categories, path, setShowCategoryName }) => {
  return (
    <div
      className="w-[18rem] border overflow-y-scroll h-[calc(100vh-5.75rem)] 
    catgeory-sidebar sticky z-30 top-[5.75rem] left-0 shadow-md flex flex-col hide-scrollbar"
    >
      {categories.map((category) => {
        return (
          <NavLink to={`/category/${path}/${category.id}`} key={category.id}>
            <div className=" flex items-center px-4 py-2 gap-4 hover:bg-gray-100 border-y cursor-pointer font-medium text-base">
              <div className=" w-[3rem] h-[3rem] rounded-full bg-[#f7f0fa]">
                <img
                  src={category.imageUrl}
                  className=" w-full h-full object-cover"
                />
              </div>
              <h1 className=" font-poppins">{category.name}</h1>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
