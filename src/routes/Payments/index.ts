import { Router } from "express";
import PaymentsController from "../../controllers/payments";

const router = Router();

router.post("/create", PaymentsController.GenerateOrder);
router.post("/verify", PaymentsController.VerifyOrder);

export default router;
