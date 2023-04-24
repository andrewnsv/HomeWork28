import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

// axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

// axios.interceptors.request.use((config) => {
//   config.headers["My-custom-field"] = "foobar";
//   return config;
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
