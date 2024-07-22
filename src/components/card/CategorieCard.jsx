import React from "react";

function CategorieCard() {
  return (
    <div
      className="relative cursor-pointer border-[1px] border-[#ff000000] border-solid hover:border-lightBlue"
      title="actions"
    >
      <img
        width={248}
        height={140}
        className="w-[248px] h-[140px]"
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzF4ZmlpNjNpZHpjOG9lbGhyZ205eGwxMzgyY2MwcHJtNTNpZTQ0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p4w0AMZJa2EtG/giphy.gif"
        alt="actions gif"
      />

      <h1 className="text-white text-[18px] sm:text-[20px] font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        Actions
      </h1>
    </div>
  );
}

export default CategorieCard;
