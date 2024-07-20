import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

function MainRoot() {
  return (
    <>
      <Header />
      <main className="mt-[10px] sm:mt-[30px]">
        <Outlet />
      </main>
    </>
  );
}

export default MainRoot;
