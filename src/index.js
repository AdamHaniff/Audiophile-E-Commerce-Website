import ReactDOM from "react-dom/client";
import "./css/main.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { MenuProvider } from "./hooks/MenuContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <MenuProvider>
      <App />
    </MenuProvider>
  </Provider>
);
