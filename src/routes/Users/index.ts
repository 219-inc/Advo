import { Router } from "express";

import UserController from "../../controllers/users";
import LawyerController from "../../controllers/lawyer";

const router = Router();

router.get('/current', UserController.current);

//Lawyers
router.get("/lawyer/:id", LawyerController.GetById);
router.get("/lawyers", LawyerController.GetAll);

export default router;
