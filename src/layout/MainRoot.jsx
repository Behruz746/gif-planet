import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

function MainRoot() {
  return (
    <>
      <Header />
      <main>
        {/* <Outlet /> */}
      </main>
    </>
  );
}

export default MainRoot;
