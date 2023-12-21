import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import UserProfile from "../Pages/UserProfile";

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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><UserProfile /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ]
    },
  ]);