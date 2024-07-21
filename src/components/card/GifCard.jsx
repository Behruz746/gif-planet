import React from "react";
import { textStyles } from "../../util/styles";

function GifCard({ autherName, gif }) {
  return (
    <div
      className={`bg-[#FFB42B] relative overflow-hidden auther-hover cursor-pointer`}
    >
      <img src={gif} className="w-full h-auto" alt="gif" />
      <div className="auther w-full flex items-center justify-start gap-[24px] py-[5px] px-[10px]  bg-gradient-to-t from-[#80808050] to-[#39383834] absolute bottom-0 sm:-bottom-[50px] left-0 backdrop-blur-[3px] sm:backdrop-blur-[5px]">
        <div className="w-[40px] h-[40px] rounded-full bg-lightBlue overflow-hidden">
          <img
            width={40}
            height={40}
            src="/img/webp/80h.jpg"
            className="w-[40px] h-[40px]"
            alt="auther avatar"
          />
        </div>
        <h1 className={`${textStyles.text2} text-white`}>{autherName}</h1>
      </div>
    </div>
  );
}

export default GifCard;
