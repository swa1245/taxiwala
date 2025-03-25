import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import CaptainProvider, { CaptainContext } from "./context/CaptainProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CaptainProvider>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </CaptainProvider>
);
