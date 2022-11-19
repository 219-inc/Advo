import { Router } from "express";

import UserController from "../../controllers/users";
import LawyerController from "../../controllers/lawyer";

const router = Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);

router.post("/lawyer/create", LawyerController.create);
router.post("/lawyer/login", LawyerController.login);

router.post("/logout", UserController.logout);

export default router;
