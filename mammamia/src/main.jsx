import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CompraProvider from './context/CompraContext';
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <CompraProvider>
      <App />
      </CompraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
