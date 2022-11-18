import { Response, NextFunction } from "express";
import { decodeToken } from "../modules/jwt";

interface JWTPayload {
  id: string;
  iat: number;
  exp: number;
  email: string;
  role: string;
}

export default async function (req: any, res: Response, next: NextFunction) {
  try {
    let accessToken = req.headers.authorization?.split(" ")[1];
    let payload = (await decodeToken(accessToken as string)) as JWTPayload;

    if (payload.role === "admin") {
      req.isAuthenticated = true;
      req.user = payload;
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send({
      message: "Internal Server Error",
    });
  }
}
