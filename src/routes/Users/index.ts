import { Router } from "express";

const router = Router();

router.get("/", (req: any, res) => {
  res.send("User Router");
});

export default router;
