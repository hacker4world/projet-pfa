import { Router } from "express";
import { getPendingRequests } from "../controller/pendingRequests/get.controller";

export const pendingRequestRouter = Router();


pendingRequestRouter.get("/all/:reference", getPendingRequests);