import { Router } from "express";

import AuthController from "../../controllers/Auth";
import UserController from "../../controllers/users";
import LawyerController from "../../controllers/lawyer";

const router = Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.post("/logout", AuthController.logout);

router.get("/refresh_token", AuthController.refreshToken);

router.post("/lawyer/create", LawyerController.create);
router.post("/lawyer/login", LawyerController.login);


export default router;
