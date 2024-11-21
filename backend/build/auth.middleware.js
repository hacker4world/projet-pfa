"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const jwtKey = fs_1.default.readFileSync("jwt.key", "utf8");
function AuthMiddleware(request, response, next) {
    const token = request.headers["authorization"];
    if (!token) {
        return response.status(401).send("Not logged in");
    }
    jsonwebtoken_1.default.verify(token, jwtKey, { algorithms: ["RS256"] }, function (err, decoded) {
        if (err)
            return response.status(401).send("token invalid");
        request.body.cin = decoded.cin;
        next();
    });
}
exports.AuthMiddleware = AuthMiddleware;
