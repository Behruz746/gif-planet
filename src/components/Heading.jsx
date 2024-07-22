import React from "react";
import { v4 as uuidv4 } from "uuid";
import { titleNav } from "../constans";
import { styles, textStyles } from "../util/styles";

function Heading({ icon, title, nav }) {
  return (
    <section
      className={`${styles.container} ${styles.padding} ${styles.flexBetween} w-full`}
    >
      <div className="flex items-center gap-[8px]">
        <img
          width={38}
          height={38}
          src={icon}
          className="w-[28px] h-[28px] sm:w-[38px] sm:h-[38px]"
          alt={`icon ${title}`}
        />
        <h1 className={`${textStyles.title} capitalize text-white`}>
          {title.replace("-", "/")}
        </h1>
      </div>

      {nav && (
        <div className="flex items-center gap-[10px]">
          {titleNav.map(({ title, dataName }) => (
            <button
              type="button"
              className="py-[8px] px-[10px] sm:px-[15px] border-lightBlue border-[1px] border-solid  text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-[#00acef] transition ease-in-out"
              key={uuidv4()}
            >
              {title}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default Heading;
