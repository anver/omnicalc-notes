import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContext } from "./context/appContext";

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById("root")
);
