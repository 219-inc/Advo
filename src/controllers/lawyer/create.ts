import { NextFunction, Request, Response } from "express";
import { createLawyer, getLawyerByEmail } from "../../database/lawyer";
import bcrypt from "bcrypt";
import { generateToken } from "../../modules/jwt";
import { _lawyer } from "types";
import { nextTick } from "process";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //check if user already exists
    const lawyer = await getLawyerByEmail(email);

    if (lawyer) {
      return res.status(404).json({
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
    next(error);
  }
}