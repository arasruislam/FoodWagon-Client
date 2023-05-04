import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Account/Login/Login";
import Registration from "../pages/Account/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import ChefDetailsLayout from "./../layouts/ChefDetailsLayout";
import Recipes from "../pages/Home/Recipes/Recipes";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Chef from "../pages/Home/Chef/Chef";
import About from "../pages/About/About";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "chef",
    element: <ChefDetailsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/chef",
        element: (
          <PrivateRoute>
            <Chef />
          </PrivateRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
    ],
  },
]);

export default Routes;
