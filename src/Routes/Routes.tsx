import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import UsersList from "../components/UsersList";
import UserProfile from "../components/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <UsersList></UsersList>,
      },
      {
        path: "/user/:id",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
