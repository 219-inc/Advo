import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/Authentication/LoginPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const HoroscopePage = lazy(() => import("@/pages/HoroscopePage"));

const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage unProtected />,
  },
];
export default routes;
