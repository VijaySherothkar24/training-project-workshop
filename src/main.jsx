import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { GlobalProvider } from "./context/GlobalContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </GlobalProvider> 
    </BrowserRouter>
  </React.StrictMode>
);
