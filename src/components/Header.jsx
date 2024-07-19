import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { Search } from "./";
import { Categories } from "./";
import { logo, CatalogIcon, navigationLinks } from "../constans";
import { styles, textStyles } from "../util/styles";

function Header() {
  const [iconToggle, setIconToggle] = useState(false);

  const IconOver = (icon, toggle) => {
    if (icon) setIconToggle(toggle);
  };

  return (
    <header className="w-full py-[20px] sticky top-0 left-0">
      <div
        className={`${styles.container} ${styles.border} flex items-center justify-between py-[9px] px-[10px] sm:px-[15px] bg-dark`}
      >
        <div className="w-[108px] h-[48] flex items-center justify-center cursor-pointer">
          <img width={108} height={48} src={logo} alt="gif planet logo" />
        </div>

        <div className="max-w-[883px] w-full flex items-center justify-end gap-[10px] sm:gap-[40px]">
          <Search />
          <nav className="w-full flex items-center justify-between gap-[16px] relative">
            {navigationLinks.map((link) => (
              <NavLink
                to={`/`}
                className={`${textStyles.text2} text-white cursor-pointer transition ease-in-out hover:text-lightBlue py-[8px]`}
                key={uuidv4()}
                onMouseOver={() => IconOver(link.icon, true)}
                onMouseOut={() => IconOver(link.icon, false)}
              >
                {link.icon ? <CatalogIcon color={iconToggle} /> : link.name}
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
