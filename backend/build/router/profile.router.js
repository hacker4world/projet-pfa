"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = require("express");
const update_1 = require("../controller/profile/update");
const get_controller_1 = require("../controller/profile/get.controller");
exports.profileRouter = (0, express_1.Router)();
exports.profileRouter.put("/update", update_1.updateProfile);
exports.profileRouter.get("/details", get_controller_1.getProfileDetails);
