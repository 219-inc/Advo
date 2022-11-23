import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { _lawyer } from "../../types";

import { getLawyerByEmail } from "../../database/lawyer";
import { generateToken } from "../../modules/jwt";
import { loginValidation } from "../../validators";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { error } = loginValidation(req.body);

    if (error) {
      return next({
        status: 400,
        message: error.details[0].message,
        send: true,
      });
    }

    let { email, password } = req.body;

    let lawyer = (await getLawyerByEmail(email, {
      id: true,
      email: true,
      password: true,
      name: true,
    })) as unknown as _lawyer;

    if (!lawyer) {
      return next({
        status: 404,
        send: true,
        message: "Lawyer not found",
      });
    }

    console.log(lawyer);

    //compare password with bcrypt
    let isPasswordCorrect = await bcrypt.compare(
      password,
      lawyer.password as string
    );

    if (!isPasswordCorrect) {
      return next({
        send: true,
        status: 400,
        message: "Invalid credentials",
      });
    }

    lawyer.password = undefined;

    //generate token
    let accessToken = await generateToken(lawyer);
    let refreshToken = await generateToken(lawyer, "1y");

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
      send: false,
      status: 500,
      message: err.message,
    });
  }
}
