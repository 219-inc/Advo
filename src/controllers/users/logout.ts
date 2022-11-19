import { NextFunction, Request, Response } from "express";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
}
