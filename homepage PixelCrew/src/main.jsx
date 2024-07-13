import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root.jsx";
import "../index.css";
import App from "../src/components/App.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Root />, 
    children: [
      { path: "/", element: <App /> }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
