import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { authenticationRouter } from "./router/authentication.router";
import { subscriptionRouter } from "./router/subscription.router";
import { unpaidBills } from "./router/unpaid-bills.router";
import { notifications } from "./controller/notifications/notifications.controller";
import { notificationsRouter } from "./router/notifications.router";
import { AuthMiddleware } from "./auth.middleware";
import { pendingRequestRouter } from "./router/pendingRequests.router";
import { rejectedRequestsRouter } from "./router/rejectedRequests.router";
import { profileRouter } from "./router/profile.router";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/authentication", authenticationRouter);
app.use("/subscription", AuthMiddleware, subscriptionRouter);
app.use("/unpaid-bills", AuthMiddleware, unpaidBills);
app.use("/notifications", AuthMiddleware, notificationsRouter);
app.use("/pending-requests", AuthMiddleware, pendingRequestRouter);
app.use("/rejected-requests", AuthMiddleware, rejectedRequestsRouter)
app.use("/profile", AuthMiddleware, profileRouter);

app.listen(4000, () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => console.log(error));
});
