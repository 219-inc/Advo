import { Response, NextFunction } from "express";
import { decodeToken } from "../modules/jwt";

interface JWTPayload {
  id: string;
  iat: number;
  exp: number;
  email: string;
  roles: [string];
}

export default async function (req: any, res: Response, next: NextFunction) {
  try {
    let token = req.cookies.accessToken;

    if (!token) {
      return next({
        send: true,
        status: 401,
        message: "Unauthorized",
      });
    }

    let payload;

    try {
      payload = (await decodeToken(token as string)) as JWTPayload;
    } catch (err) {
      return next({
        send: true,
        status: 403,
        message: "Token expired",
      });
    }

    if (payload) {
      req.isAuthenticated = true;
      req.user = payload;
      next();
    } else {
      next({
        send: true,
        status: 401,
        message: "Unauthorized",
      });
    }
  } catch (err: any) {
    next({
      send: false,
      status: 500,
      message: err.message,
    });
  }
}
