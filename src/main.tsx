import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.scss";
import { createAuthenticationSlice } from "./store/authentication.ts";
import { createCounterSlice } from "./store/counter.ts";

createAuthenticationSlice();
createCounterSlice();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
