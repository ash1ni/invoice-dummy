import { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: ["Poppins", "Nunito Sans:400,700,600", "Public Sans:400"],
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
