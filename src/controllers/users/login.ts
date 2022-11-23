import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { User as _user } from "../../types";

import { getUserByEmail } from "../../database/user";
import { generateToken } from "../../modules/jwt";
import { loginValidation } from "../../validators";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let { error } = loginValidation(req.body);

    if (error) {
      return res.json({
        status: 403,
        message: error.details[0].message,
        send: true,
      });
    }

    let { email, password } = req.body;

    let user = (await getUserByEmail(email, true)) as _user;

    if (!user) {
      return next({
        status: 404,
        message: "User not found",
        send: true,
      });
    }

    //compare password with bcrypt
    let isPasswordCorrect = await bcrypt.compare(
      password,
      user.password as string
    );

    if (!isPasswordCorrect) {
      return next({
        status: 400,
        message: "Invalid credentials",
        send: true,
      });
    }

    user.password = undefined;
    user.role = "general_user";

    //generate token
    let accessToken = await generateToken(user);
    let refreshToken = await generateToken(user, "30d");

    //send token
    res
      .cookie("accessToken", accessToken, { httpOnly: true })
      .cookie("refreshToken", refreshToken, { httpOnly: true })
      .status(200)
      .json({
        msg: "Login successful",
      });
  } catch (err: any) {
    next({
      status: 500,
      message: err.message,
      send: false,
    });
  }
}
