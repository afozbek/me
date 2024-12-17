import React from "react";
import ReactDOM from "react-dom/client";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();
