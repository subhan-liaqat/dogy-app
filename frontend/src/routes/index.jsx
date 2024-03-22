import App from "../App";
import Home from "../Pages/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
