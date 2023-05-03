import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Account/Login/Login";
import Registration from "../pages/Account/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import ChefDetailsLayout from "./../layouts/ChefDetailsLayout";
import Recipes from "../pages/Home/Recipes/Recipes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "chef",
    element: <ChefDetailsLayout />,
    children: [
      {
        path: ":id",
        element: <Recipes />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
    ],
  },
]);

export default Routes;
