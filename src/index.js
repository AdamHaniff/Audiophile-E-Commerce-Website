import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { MenuProvider } from "./hooks/MenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Provider>
  </React.StrictMode>
);
