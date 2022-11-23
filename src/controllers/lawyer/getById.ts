import { NextFunction, Request, Response } from "express";
import { getLawyer } from "../../database/lawyer";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const lawyer = await getLawyer(id, {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    });

    res.status(200).json({ lawyer });
  } catch (error: any) {
    next({
      send: false,
      status: 500,
      message: error.message,
    });
  }
}
