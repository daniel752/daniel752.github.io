import React from "react";
import { Landing, Portfolio, Contact, Services, Skills } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "projects",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
