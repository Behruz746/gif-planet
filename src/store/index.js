import { configureStore } from "@reduxjs/toolkit";
import CatalogReduce from "../slice/catalog";

export default configureStore({
  reducer: { catalog: CatalogReduce },
  devTools: process.env.NODE_ENV !== "production", // redux dev tool uchun
});
