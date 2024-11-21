import { Router } from "express";
import { updateProfile } from "../controller/profile/update";
import { getProfileDetails } from "../controller/profile/get.controller";

export const profileRouter = Router();

profileRouter.put("/update", updateProfile);
profileRouter.get("/details", getProfileDetails);
