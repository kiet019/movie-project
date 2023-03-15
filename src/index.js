import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./components/login/AuthContext";
import { SwitchProvider } from "./components/userUI/userComponents/context/SwitchContext";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import favorReducer from "./features/Favories"
export const store = configureStore({
  reducer: {
    favors: favorReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <SwitchProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SwitchProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
