import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import UserProfile from "../Pages/UserProfile";
import AddTasks from "../Components/AddTasks";
import ToDo from "../Components/ToDo";
import AllTasks from "../Components/AllTasks";
import EditTask from "../Components/EditTask";

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
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "allTasks",
        element: (
          <PrivateRoute>
            <AllTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "addTasks",
        element: (
          <PrivateRoute>
            <AddTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "toDo",
        element: (
          <PrivateRoute>
            <ToDo />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-task/:taskId",
        element: <EditTask />,
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.taskId}`),
      },
    ],
  },
]);
