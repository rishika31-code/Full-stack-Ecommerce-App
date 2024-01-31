import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ categories, path }) => {
  return (
    <div
      className="w-[18%] border overflow-y-scroll h-[calc(100vh-6rem)] 
    catgeory-sidebar sticky z-30 top-0 shadow-md flex flex-col gap-2 hide-scrollbar"
    >
      <NavLink to={`category/${path}/all`}>
        <div className=" flex gap-4 items-center px-4 py-2 hover:bg-pink-500 rounded-md hover:text-white cursor-pointer font-medium text-base">
          <div className=" w-[3rem] h-[3rem] rounded-full bg-[#f7f0fa]">
            <img
              src="https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Tender%20Coconut%20(2).png"
              className=" w-full h-full object-cover"
            />
          </div>
          <h1>All</h1>
        </div>
      </NavLink>
      {categories.map((category) => {
        return (
          <NavLink key={category.id}>
            <div className=" flex gap-4 items-center px-4 py-2 hover:bg-pink-500 rounded-md hover:text-white cursor-pointer font-medium text-base">
              <div className=" w-[3rem] h-[3rem] rounded-full bg-[#f7f0fa]">
                <img
                  src="https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Tender%20Coconut%20(2).png"
                  className=" w-full h-full object-cover"
                />
              </div>
              <h1>{category.name}</h1>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
