import { Router } from "express";
import { _lawyer } from "../../types";

import { getAllLawyers, getLawyer } from "../../database/lawyer";

const router = Router();

//get lawyer by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const lawyer = await getLawyer(id);

  res.status(200).json({ lawyer });
});

export default router;
