"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const data_source_1 = require("../../data-source");
const Account_entity_1 = require("../../entity/Account.entity");
const jwt_service_1 = require("../../utils/jwt.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
function loginController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = request.body;
        const accountRepository = data_source_1.AppDataSource.getRepository(Account_entity_1.Account);
        const account = yield accountRepository.findOneBy({
            email,
        });
        if (!account)
            return response.status(404).json({ message: "Account was not found" });
        let validPassword = yield bcrypt_1.default.compare(password, account.password);
        if (!validPassword)
            return response.status(401).json({ message: "Incorrect password" });
        const token = jwt_service_1.Jwtservice.createToken(account.cin);
        return response.status(200).json({ token });
    });
}
exports.loginController = loginController;
