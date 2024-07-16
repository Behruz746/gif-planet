import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainRoot } from "./layout";
import { Home, Error } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
