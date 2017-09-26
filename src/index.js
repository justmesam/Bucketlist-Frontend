import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from "./containers/App";
import store from "./constants/store";

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store= { store } >
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
