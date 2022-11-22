import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "@/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ErrorBoundary = lazy(() => import("@/layout/ErrorBoundary"));

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
