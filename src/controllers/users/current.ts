import { NextFunction, Response } from "express";

export default async function (req: any, res: Response, next: NextFunction) {
  try {
    const user = await req.user;
    res.json(user);
  } catch (error: any) {
    next({
      send: false,
      status: 500,
      message: error.message,
    });
  }
}
