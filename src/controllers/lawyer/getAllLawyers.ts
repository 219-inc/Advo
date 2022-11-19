import { NextFunction, Request, Response } from "express";
import { getAllLawyers } from "../../database/lawyer";

export default async function (req: Request, res: Response, next: NextFunction) {
  try {
    //calculate skip based on page number and limit
    const { page = 1, limit: take = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(take);

    if (Number(take) < 10) {
      return res.status(400).json({ message: "Limit cannot be less than 10" });
    }

    const lawyers = await getAllLawyers({
      take: Number(take),
      skip: Number(skip),
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });
    res.status(200).json({ lawyers });
  } catch (err: any) {
    next(err)
  }
}
