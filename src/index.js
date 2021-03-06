import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./constants/store";
import Routes from "./routes";

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store= { store } >
      <BrowserRouter >
        <Routes />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
