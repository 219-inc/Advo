import { Request, Response, NextFunction } from "express";

import crypto from "crypto";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(sign.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      res.status(200).json({
        message: "Payment successful",
      });
    } else {
      res.status(400).json({
        message: "Payment failed",
      });
    }
  } catch (error: any) {
    next({
      status: 500,
      message: error.message,
      send: false,
    });
  }
}
