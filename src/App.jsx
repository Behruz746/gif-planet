import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainRoot, CategorieRoot } from "./layout";
import {
  Home,
  TrendingGifs,
  Search,
  Categories,
  Error,
  User,
  Gif,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: ":name", element: <TrendingGifs /> },
        { path: ":name-user", element: <User /> },
        { path: "/gif/:gif-name", element: <Gif /> },
        { path: "/search/:search", element: <Search /> },
        {
          path: "categories",
          element: <CategorieRoot />,
          children: [{ path: ":name", element: <Categories /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
