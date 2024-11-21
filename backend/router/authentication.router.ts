import { Router } from "express";
import { loginController } from "../controller/authentication/login.controller";
import { signupController } from "../controller/authentication/signup.controller";

export const authenticationRouter = Router();

authenticationRouter.post("/login", loginController);
authenticationRouter.post("/signup", signupController);
