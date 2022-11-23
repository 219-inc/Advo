import { NextFunction, Request, Response } from "express";
import { createLawyer, getLawyerByEmail } from "../../database/lawyer";
import bcrypt from "bcrypt";
import { generateToken } from "../../modules/jwt";
import { _lawyer } from "types";
import { signUpValidation } from "../../validators";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { error } = signUpValidation(req.body);

    if (error) {
      return next({
        send: true,
        message: error.details[0].message,
        status: 400,
      });
    }

    const { email, password, name } = req.body;

    //check if user already exists
    const lawyer = await getLawyerByEmail(email);

    if (lawyer) {
      return next({
        send: true,
        status: 400,
        message: "Lawyer already exists",
      });
    }

    //create user
    const newlawyer: _lawyer = {
      email,
      password: await bcrypt.hash(password, 10),
      name,
    };

    //save user
    await createLawyer(newlawyer);

    //generate token
    const accesstoken = await generateToken({
      id: newlawyer.id,
      email,
      role: "GEN_USER",
    });

    const refreshToken = await generateToken(
      {
        id: newlawyer.id,
        email,
        role: "GEN_USER",
      },
      "30d"
    );

    return res
      .cookie("accessToken", accesstoken, { httpOnly: true })
      .cookie("refreshToken", refreshToken, { httpOnly: true })
      .status(200)
      .json({
        message: "Lawyer created successfully",
      });
  } catch (error: any) {
    next({
      send: false,
      status: 500,
      message: error.message,
    });
  }
}
