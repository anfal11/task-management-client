import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import UserProfile from "../Pages/UserProfile";
import UserHome from "../Components/UserHome";
import AddTasks from "../Components/AddTasks";
import ToDo from "../Components/ToDo";

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
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "userHome",
                element: <PrivateRoute><UserHome /></PrivateRoute>,
            },
            {
                path: "addTasks",
                element: <PrivateRoute><AddTasks /></PrivateRoute>,
            },
            {
                path: "toDo",
                element: <PrivateRoute><ToDo /></PrivateRoute>,
            }
        ]
      },
  ]);