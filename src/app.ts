import express from "express";

import isAdmin from "./middlewares/isAdmin";
import isLawyer from "./middlewares/isLawyer";
import isAuthenticated from "./middlewares/isAuthenticated";

import AuthRouter from "./routes/Auth";
import AdminRouter from "./routes/Admin";
import LawyerRouter from "./routes/Lawyers";
import UserRouter from "./routes/Users";

export default function () {
  const app = express();

  app.use(express.json());

  app.use("/", AuthRouter);
  app.use("/api/v1/admin", isAdmin, AdminRouter);
  app.use("/api/v1/users", isAuthenticated, UserRouter);
  app.use("/api/v1/lawyers", isLawyer, LawyerRouter);

  return app;
}
