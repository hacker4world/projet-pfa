import { Router } from "express";
import { notifications } from "../controller/notifications/notifications.controller";

export const notificationsRouter = Router();

notificationsRouter.get("/notifications/:reference", notifications);
