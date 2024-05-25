import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Secret from "../pages/Shared/secret/Secret";
import PrivetRouts from "./PrivetRouts";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import MyCart from "../Layouts/DashBoard/MyCart/MyCart";
import AllUsers from "../Layouts/DashBoard/AllUsers/AllUsers";
import AddItems from "../Layouts/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singUp",
        element: <SingUp />,
      },
      {
        path: "secret",
        element: (
          <PrivetRouts>
            <Secret />
          </PrivetRouts>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRouts>
        <DashBoard></DashBoard>
      </PrivetRouts>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);
