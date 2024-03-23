import { lazy } from "react";
import App from "../App";
import Home from "../Pages/Home";

const Assistant = lazy(() => import("../Pages/Assistant"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/assistant",
        element: <Assistant />,
      },
    ],
  },
];

export default routes;
