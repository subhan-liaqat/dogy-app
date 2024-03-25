import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DogyContextProvider from "./Components/map/DogyContext";
import "./index.css";
import routes from "./routes";

const googleMapApiKey = import.meta.env.VITE_MAP_API_KEY;

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <APIProvider apiKey={googleMapApiKey}>
      <DogyContextProvider>
        <RouterProvider router={router} />
      </DogyContextProvider>
    </APIProvider>
  </React.StrictMode>
);
