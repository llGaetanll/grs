// loads the index.html file into webpack
require("file-loader?name=[name].[ext]!./index.html");

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
