import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const SamplePage = lazy(() => import("@/pages/SamplePage"));
const UsersPage = lazy(() => import("@/pages/UsersPage"));
const ContentPage = lazy(() => import("@/pages/ContentPage"));
const LawyerApplications = lazy(() => import("@/pages/LawyerApplications"));
const ApplicationDetails = lazy(() => import("@/pages/ApplicationDetails"));

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sample",
    element: <SamplePage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/content",
    element: <ContentPage />,
  },
  {
    path: "/lawyer_registration",
    element: <LawyerApplications />,
  },
  {
    path: "/lawyer-application-details/:id",
    element: <ApplicationDetails />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default routes;
