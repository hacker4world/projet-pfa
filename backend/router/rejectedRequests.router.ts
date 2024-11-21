import { Router } from "express";
import { fetchRejectedRequests } from "../controller/rejectedRequests/get.controller";

export const rejectedRequestsRouter = Router();

rejectedRequestsRouter.get("/all/:reference", fetchRejectedRequests);
