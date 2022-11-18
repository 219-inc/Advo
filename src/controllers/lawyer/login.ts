import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { _lawyer } from "../../types";

import { getLawyerByEmail } from "../../database/lawyer";
import { generateToken } from "../../modules/jwt";

export default async function (req: Request, res: Response) {
  try {
    let { email, password } = req.body;

    let lawyer = (await getLawyerByEmail(email, {
      id: true,
      email: true,
      password: true,
      name: true,
    })) as unknown as _lawyer;

    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }

    console.log(lawyer);

    //compare password with bcrypt
    let isPasswordCorrect = await bcrypt.compare(
      password,
      lawyer.password as string
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    lawyer.password = undefined;

    //generate token
    let accessToken = await generateToken(lawyer);
    let refreshToken = await generateToken(lawyer, "1y");

    //send token
    res.status(200).json({
      msg: "Login successful",
      tokens: { accessToken, refreshToken },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
}
