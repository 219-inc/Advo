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
    let token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    let payload = (await decodeToken(token as string)) as JWTPayload;

    if (payload) {
      req.isAuthenticated = true;
      req.user = payload;
      next();
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send({
      message: "Internal Server Error",
    });
  }
}
