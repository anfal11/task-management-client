import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <h1>404 Not Found</h1>,
      children: [
        {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "/profile",
        element: <h1>Profile</h1>,
      },
      {
        path: "/login",
        element: <h1>Login</h1>,
      }
    ]
    },
  ]);