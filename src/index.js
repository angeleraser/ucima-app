import React from "react";
import ReactDOM from "react-dom";
import "../src/css/index.css";
import { App } from "./components/App/App";
import { HashRouter } from "react-router-dom";
const ROOT = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  ROOT
);
