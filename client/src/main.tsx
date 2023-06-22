import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "../node_modules/react-router-dom/dist/index";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
