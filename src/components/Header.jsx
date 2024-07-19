import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { catalogToggleHandler } from "../slice/catalog";
import { Search } from "./";
import { Categories } from "./";
import { logo, CatalogIcon, navigationLinks } from "../constans";
import { styles, textStyles } from "../util/styles";

function Header() {
  const { catalogToggle } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const handleMouseToggle = (link, toggle) => {
    dispatch(catalogToggleHandler({ icon: link, toggle }));
  };

  return (
    <header className="w-full py-[20px] sticky top-0 left-0">
      <div
        className={`${styles.container} ${styles.border} flex items-center justify-between py-[9px] px-[0] bg-dark`}
      >
        <div className="w-[108px] h-[48] flex items-center justify-center cursor-pointer pl-[10px] sm:pl-[15px]">
          <img width={108} height={48} src={logo} alt="gif planet logo" />
        </div>

        <div className="max-w-[883px] w-full flex items-center justify-end gap-[10px] sm:gap-[40px]">
          <Search />
          <nav className="w-full flex items-center justify-between gap-[16px] relative pr-[10px] sm:pr-[15px]">
            {navigationLinks.map((link) => (
              <NavLink
                to={`/`}
                className={`${textStyles.text2} text-white cursor-pointer transition ease-in-out hover:text-lightBlue py-[8px]`}
                key={uuidv4()}
                onMouseEnter={() => handleMouseToggle(link.icon, true)}
                onMouseLeave={() => handleMouseToggle(link.icon, false)}
              >
                {link.icon ? <CatalogIcon color={catalogToggle} /> : link.name}
              </NavLink>
            ))}

            <Categories />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
