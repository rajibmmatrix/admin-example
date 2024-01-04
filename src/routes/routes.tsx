import { createBrowserRouter } from "react-router-dom";
import {
  AddUserPage,
  DashboardPage,
  ErrorPage,
  LoginPage,
  UsersPage,
} from "@pages";
import { Layout } from "@components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "users/add",
        element: <AddUserPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
