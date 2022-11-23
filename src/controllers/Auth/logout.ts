import { NextFunction, Request, Response } from "express";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("logout");
    res
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .json({ message: "Logged out successfully" })
      .end();
  } catch (error: any) {
    next({
      send: false,
      status: 500,
      message: error.message,
    });
  }
}
