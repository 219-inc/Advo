import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

const Protected = lazy(() => import("@/layout/Protected"));
const MainLayout = lazy(() => import("@/layout/Main"));

import PreLoader from "@/components/PreLoader";

import AuthRoutes from "@/routes/AuthRoutes";
import ProtectedRoutes from "@/routes/ProtectedRoutes";

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {AuthRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route element={<Protected />}>
            {ProtectedRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
