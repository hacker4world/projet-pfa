import { Router } from "express";
import { stats } from "../controller/subscription/stats.controller";
import { subscriptions } from "../controller/subscription/subscriptions.controller";
import { deleteSubscription } from "../controller/subscription/delete.controller";

export const subscriptionRouter = Router();

subscriptionRouter.get("/stats/:reference", stats);

subscriptionRouter.get("/subscriptions", subscriptions);

subscriptionRouter.delete("/delete/:reference", deleteSubscription);
