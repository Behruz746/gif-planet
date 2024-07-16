import React from "react";
import { searchIcon } from "../constans";
import { textStyles } from "../util/styles";

function Search() {
  return (
    <form
      action="#"
      className="max-w-[350px] w-full flex items-center justify-between  bg-white overflow-hidden transition-liner"
      onSubmit={(e) => {
        // for don't reload
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="search"
        className={`w-full border-[0px] outline-none py-[5px] px-[10px] text-[#000] ${textStyles.text3_normal} placeholder:text-[#696363] placeholder:text-[15px] placeholder:font-normal`}
      />
      <button
        type="submit"
        className="border-[0px] outline-none py-[10px] px-[10px] transition ease-in-out hover:bg-lightBlue"
      >
        <img width={24} height={24} src={searchIcon} alt="🔍" />
      </button>
    </form>
  );
}

export default Search;
