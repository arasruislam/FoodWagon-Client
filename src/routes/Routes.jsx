import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Account/Login/Login";
import Registration from "../pages/Account/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Home/Chef/Chef";
import ChefDetailsLayout from "./../layouts/ChefDetailsLayout";

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
  // {
  //   path: "chef",
  //   element: <ChefDetailsLayout />,
  //   children: [
  //     {
  //       path: ":id",
  //       element: <Chef />,
  //       loader: ({ params }) =>
  //         fetch(`http://localhost:5000/chef/${params.id}`),
  //     },
  //   ],
  // },
]);

export default Routes;
