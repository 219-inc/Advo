import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import cookieParser from "cookie-parser";

import isAdmin from "./middlewares/isAdmin";
import isLawyer from "./middlewares/isLawyer";
import isAuthenticated from "./middlewares/isAuthenticated";

import AuthRouter from "./routes/Auth";
import AdminRouter from "./routes/Admin";
import LawyerRouter from "./routes/Lawyers";
import UserRouter from "./routes/Users";

export default function () {
  const app = express();

  app.use(cookieParser());
  app.use(express.json());

  app.use("/", AuthRouter);
  app.use("/api/v1/admin", isAdmin, AdminRouter);
  app.use("/api/v1/users", isAuthenticated, UserRouter);
  app.use("/api/v1/lawyers", isLawyer, LawyerRouter);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message;

    console.log(err);

    return res.status(errorStatus).json({
      message: "Internal Server Error",
      status: errorStatus,
    });
  });

  return app;
}
