import { NextFunction, Request, Response } from "express";
import { User as _user } from "../../types";

import bcrypt from "bcrypt";

import { getUserByEmail, createUser } from "../../database/user";
import { generateToken } from "../../modules/jwt";
import { signUpValidation } from "../../validators";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let { error } = signUpValidation(req.body);

    if (error) {
      return next({
        send: true,
        message: error.details[0].message,
        status: 400,
      });
    }

    const { email, password, firstname, lastname, middlename } = req.body;

    //check if user already exists
    const user = await getUserByEmail(email);

    if (user) {
      return next({
        send: true,
        status: 400,
        message: "User already exists",
      });
    }

    //create user
    const newUser: _user = {
      email: email,
      password: await bcrypt.hash(password, 10),
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
    };

    //save user
    await createUser(newUser);

    //generate token
    const accesstoken = await generateToken({
      id: newUser.id,
      email,
      role: "GEN_USER",
    });

    const refreshtoken = await generateToken(
      {
        id: newUser.id,
        email,
        role: "GEN_USER",
      },
      "30d"
    );

    return res
      .cookie("accessToken", accesstoken, { httpOnly: true })
      .cookie("refreshToken", refreshtoken, { httpOnly: true })
      .status(200)
      .json({
        message: "User created successfully",
      });
  } catch (err: any) {
    next({
      send: false,
      status: 500,
      message: err.message,
    });
  }
}
