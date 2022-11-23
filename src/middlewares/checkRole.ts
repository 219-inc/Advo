import { NextFunction, Response, Request } from "express";

export default function (roles: string[]) {
  return (req: any, res: Response, next: NextFunction) => {
    if (roles.includes(req.user?.role as string)) {
      next();
    } else {
      res.status(403).send("You are not authorized to access this resource");
    }
  };
}
