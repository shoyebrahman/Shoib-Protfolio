import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen mx-auto pr-6 pl-6 ">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
