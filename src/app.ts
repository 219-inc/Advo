import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import Role from "./utils/roles";

import isAuthenticated from "./middlewares/isAuthenticated";
import AllowedRoles from "./middlewares/checkRole";
import ErrorHandler from "./utils/error";

import AuthRouter from "./routes/Auth";
import AdminRouter from "./routes/Admin";
import LawyerRouter from "./routes/Lawyers";
import UserRouter from "./routes/Users";
import PaymentsRouter from "./routes/Payments";

export default function () {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());

  app.use("/", AuthRouter);

  app.use(isAuthenticated);

  app.use("/api/v1/admin", AllowedRoles([Role.Admin]), AdminRouter);
  app.use("/api/v1/users", AllowedRoles([Role.User]), UserRouter);
  app.use("/api/v1/lawyers", AllowedRoles([Role.Lawyer]), LawyerRouter);

  app.use("/api/v1/payments", PaymentsRouter);

  app.use(ErrorHandler);

  return app;
}
