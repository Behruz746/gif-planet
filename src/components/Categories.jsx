import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { categories } from "../constans/index";
import { textStyles } from "../util/styles";

function Categories() {
  return (
    <div className="absolute top-[54px] left-[0] w-full flex flex-col gap-[8px] items-start py-[8px] px-[16px] bg-[#282626]">
      <NavLink
        to="/categories"
        className={`${textStyles.title2} cursor-pointer`}
      >
        Categories
      </NavLink>
      <div className="flex items-start gap-[30px] flex-wrap">
        {categories.map((_, idx) => {
          return (
            <div className="flex flex-col gap-[4px]" key={uuidv4()}>
              {categories[idx]?.map((item) => (
                <NavLink
                  key={uuidv4()}
                  to={item.path}
                  className={`${textStyles.text2} transition ease-in-out text-white cursor-pointer hover:text-lightBlue`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
