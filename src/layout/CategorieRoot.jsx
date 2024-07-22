import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { Categories } from "../pages/";
import { CategorieCard, Heading } from "../components";
import { anime, navCategories } from "../constans";
import { styles, textStyles } from "../util/styles";

function CategorieRoot() {
  const { name } = useParams();

  return (
    <>
      <Heading
        icon={anime}
        title={name != undefined ? name : "categories"}
        nav={false}
      />
      <section
        className={`section ${styles.container} ${styles.padding} flex items-start gap-[30px] mt-[20px] sm:mt-[40px]`}
      >
        <nav className="hidden sm:block w-full max-w-[180px] user-background py-[10px] px-[15px] ">
          <h1 className={`${textStyles.title2} text-white`}>Categories</h1>
          <div className="flex flex-col gap-[3px] mt-[8px]">
            {navCategories.map((link) => (
              <NavLink
                to={`/categories/${link.path}`}
                className={`text-[16px] text-white cursor-pointer hover:text-lightBlue categories-nav`}
                key={uuidv4()}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* container */}
        <Outlet />
        {name === undefined && <Categories path={"/"} />}
      </section>
    </>
  );
}

export default CategorieRoot;
