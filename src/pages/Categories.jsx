import React from "react";
import { CategorieCard } from "../components";
import { useParams } from "react-router-dom";

function Categories({ path }) {
  const { name } = useParams();

  console.log(name);

  return (
    <div className="categories flex items-center justify-start gap-[25px] flex-wrap">
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
    </div>
  );
}

export default Categories;
