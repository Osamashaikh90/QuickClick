import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
        <AuthProvider>
          <App />
          </AuthProvider>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
