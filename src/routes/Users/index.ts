import { Router } from "express";
import LawyerController from "../../controllers/lawyer";

const router = Router();



//Lawyers
router.get("/lawyer/:id", LawyerController.GetById);
router.get("/lawyers", LawyerController.GetAll);

export default router;
