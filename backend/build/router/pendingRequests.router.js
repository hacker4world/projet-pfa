"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pendingRequestRouter = void 0;
const express_1 = require("express");
const get_controller_1 = require("../controller/pendingRequests/get.controller");
exports.pendingRequestRouter = (0, express_1.Router)();
exports.pendingRequestRouter.get("/all/:reference", get_controller_1.getPendingRequests);
