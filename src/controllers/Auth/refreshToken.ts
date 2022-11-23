import { NextFunction, Request, Response } from "express";
import { generateToken, decodeToken } from "../../modules/jwt";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //get the user id from previous midleware
    let user: any = await decodeToken(req.cookies.refreshToken);

    //remove iat and exp from user object
    delete user.iat;
    delete user.exp;

    //generate new tokens
    let accessToken = await generateToken(user);

    //send new tokens
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({
      message: "Token refreshed",
    });
  } catch (err: any) {
    next({
      status: 500,
      message: err.message,
      send: false,
    });
  }
}
