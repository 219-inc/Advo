import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/Authentication/LoginPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const routes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage unProtected />,
  },
];
export default routes;
