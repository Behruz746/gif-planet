import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Heading } from "../components";
import { anime, navCategories } from "../constans";
import { styles, textStyles } from "../util/styles";

function CategorieRoot() {
  return (
    <>
      <Heading icon={anime} title={"Anime"} nav={false} />
      <section
        className={`section ${styles.container} ${styles.padding} hidden sm:flex items-start gap-[30px] mt-[20px] sm:mt-[40px]`}
      >
        <nav className=" w-full max-w-[180px] user-background py-[10px] px-[15px]">
          <h1 className={`${textStyles.title2} text-white`}>Categories</h1>
          <div className="flex flex-col gap-[3px] mt-[8px]">
            {navCategories.map((link) => (
              <NavLink
                to={`/categories/${link.path}`}
                className={`text-[16px] text-white cursor-pointer hover:text-lightBlue categories-nav`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* container */}
        <Outlet />
      </section>
    </>
  );
}

export default CategorieRoot;
