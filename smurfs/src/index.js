import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import SmurfContextProvider from "./providers/SmurfContextProvider";

ReactDOM.render(
  <SmurfContextProvider>
    <App />
  </SmurfContextProvider>,
  document.getElementById("root")
);
