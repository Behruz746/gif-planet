import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { categories } from "../constans/index";
import { textStyles } from "../util/styles";
import { catalogActive } from "../slice/catalog";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
  const { catalogToggle } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute left-[0] w-full flex flex-col gap-[8px] items-start py-[8px] px-[16px] bg-[#282626] ease-in duration-100 ${
        catalogToggle
          ? "top-[50px] opacity-[1] z-[1] pointer-events-auto select-auto"
          : "-top-[0px] pointer-events-none opacity-[0] -z-[100] select-none"
      }`}
      onMouseEnter={() => dispatch(catalogActive(true))}
      onMouseLeave={() => dispatch(catalogActive(false))}
    >
      <div className="w-full h-[20px] absolute -top-[20px] left-0"></div>
      <NavLink
        to="/categories"
        className={`${textStyles.title2} text-white cursor-pointer`}
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
