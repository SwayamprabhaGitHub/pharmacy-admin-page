import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MedicineContextProvider from "./store/medicineProvider";
import CartContextProvider from "./store/cartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <MedicineContextProvider>
      <App />
    </MedicineContextProvider>
  </CartContextProvider>
);
