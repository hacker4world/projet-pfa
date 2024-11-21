"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectedRequestsRouter = void 0;
const express_1 = require("express");
const get_controller_1 = require("../controller/rejectedRequests/get.controller");
exports.rejectedRequestsRouter = (0, express_1.Router)();
exports.rejectedRequestsRouter.get("/all/:reference", get_controller_1.fetchRejectedRequests);
