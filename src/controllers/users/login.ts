import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { User as _user } from "../../types";

import { getUserByEmail } from "../../database/user";
import { generateToken } from "../../modules/jwt";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let { email, password } = req.body;

    let user = (await getUserByEmail(email, true)) as _user;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //compare password with bcrypt
    let isPasswordCorrect = await bcrypt.compare(
      password,
      user.password as string
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    user.password = undefined;

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
  } catch (err) {
    next(err);
  }
}
