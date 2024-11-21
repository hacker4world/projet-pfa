"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRouter = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../auth.middleware");
exports.dataRouter = (0, express_1.Router)();
exports.dataRouter.get("/protected", auth_middleware_1.AuthMiddleware, (req, res) => {
    res.send("protected data");
});
