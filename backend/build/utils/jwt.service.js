"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwtservice = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
class Jwtservice {
    static createToken(cin) {
        const key = fs_1.default.readFileSync("jwt.key");
        const token = jsonwebtoken_1.default.sign({ cin }, key, {
            algorithm: "RS256",
            expiresIn: "60m",
        });
        return token;
    }
}
exports.Jwtservice = Jwtservice;
