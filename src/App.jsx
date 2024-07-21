import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainRoot, CategorieRoot } from "./layout";
import { Home, Categories, Error } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
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
