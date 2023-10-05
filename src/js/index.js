import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configStore from "./store";
const root = createRoot(document.getElementById("electronChat"));
const store = configStore();
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
