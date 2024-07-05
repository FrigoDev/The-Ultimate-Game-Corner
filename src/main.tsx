import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "../node_modules/normalize.css/normalize.css";
import "./assets/styles/index.css";
import "./assets/styles/mediaquerys.css";

ReactDOM.createRoot(document.getElementById("root") as Element | DocumentFragment).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
