import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";

import CatalogManagement from "./pages/CatalogManagement";
import ProcureToPay from "./pages/ProcureToPay";
import VendorManagement from "./pages/VendorManagement";
import ContractManagement from "./pages/ContractManagement";
import DataAnalysis from "./pages/DataAnalysis";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/catalog-management"
          element={<CatalogManagement />}
        />

        <Route
          path="/procure-to-pay"
          element={<ProcureToPay />}
        />

        <Route
          path="/vendor-management"
          element={<VendorManagement />}
        />

        <Route
          path="/contract-management"
          element={<ContractManagement />}
        />

        <Route
          path="/data-analysis"
          element={<DataAnalysis />}
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);