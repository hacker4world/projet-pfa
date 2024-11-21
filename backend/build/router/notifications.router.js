"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationsRouter = void 0;
const express_1 = require("express");
const notifications_controller_1 = require("../controller/notifications/notifications.controller");
exports.notificationsRouter = (0, express_1.Router)();
exports.notificationsRouter.get("/notifications/:reference", notifications_controller_1.notifications);
