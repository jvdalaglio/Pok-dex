import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Favorite } from "../pages/Favorite"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
  },
  {
    path: `details/:id`,
    element: <Details /> ,
  },
  {
    path: "favorite",
    element: <Favorite />
  },
]);