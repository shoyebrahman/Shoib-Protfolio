import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/home";
import Project from "../Pages/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
    ],
  },
]);
export default router;
