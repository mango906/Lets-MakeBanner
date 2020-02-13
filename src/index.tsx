import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
