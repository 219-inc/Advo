import { Request, Response, NextFunction } from "express";

import Razorpay from "razorpay";
import crypto from "crypto";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: req.body.amount, // amount in the smallest currency unit
      currency: "INR",
      receipt: crypto.randomBytes(16).toString("hex"),
      payment_capture: 1,
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error: any) {
    console.log(JSON.stringify(error));
    next({
      status: 500,
      message: error.message,
      send: false,
    });
  }
}
