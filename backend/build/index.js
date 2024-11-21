"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
const authentication_router_1 = require("./router/authentication.router");
const subscription_router_1 = require("./router/subscription.router");
const unpaid_bills_router_1 = require("./router/unpaid-bills.router");
const notifications_router_1 = require("./router/notifications.router");
const auth_middleware_1 = require("./auth.middleware");
const pendingRequests_router_1 = require("./router/pendingRequests.router");
const rejectedRequests_router_1 = require("./router/rejectedRequests.router");
const profile_router_1 = require("./router/profile.router");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/authentication", authentication_router_1.authenticationRouter);
app.use("/subscription", auth_middleware_1.AuthMiddleware, subscription_router_1.subscriptionRouter);
app.use("/unpaid-bills", auth_middleware_1.AuthMiddleware, unpaid_bills_router_1.unpaidBills);
app.use("/notifications", auth_middleware_1.AuthMiddleware, notifications_router_1.notificationsRouter);
app.use("/pending-requests", auth_middleware_1.AuthMiddleware, pendingRequests_router_1.pendingRequestRouter);
app.use("/rejected-requests", auth_middleware_1.AuthMiddleware, rejectedRequests_router_1.rejectedRequestsRouter);
app.use("/profile", auth_middleware_1.AuthMiddleware, profile_router_1.profileRouter);
app.listen(4000, () => {
    data_source_1.AppDataSource.initialize()
        .then(() => {
        console.log("database connected");
    })
        .catch((error) => console.log(error));
});
