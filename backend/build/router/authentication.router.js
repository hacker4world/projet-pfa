"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express_1 = require("express");
const login_controller_1 = require("../controller/authentication/login.controller");
const signup_controller_1 = require("../controller/authentication/signup.controller");
exports.authenticationRouter = (0, express_1.Router)();
exports.authenticationRouter.post("/login", login_controller_1.loginController);
exports.authenticationRouter.post("/signup", signup_controller_1.signupController);
