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
exports.signupController = void 0;
const Account_entity_1 = require("../../entity/Account.entity");
const data_source_1 = require("../../data-source");
const jwt_service_1 = require("../../utils/jwt.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
function signupController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cin, name, email, password, adress, phone } = request.body;
        const accountRepository = data_source_1.AppDataSource.getRepository(Account_entity_1.Account);
        const existingAccount = yield accountRepository.findOne({
            where: [{ email }, { cin }, { phone }],
        });
        if (existingAccount) {
            if (existingAccount.email == email)
                return response.status(400).json({ message: "Email already in use" });
            if (existingAccount.cin == cin)
                return response
                    .status(400)
                    .json({ message: "Cin number already in use" });
            if (existingAccount.phone == phone)
                return response
                    .status(400)
                    .json({ message: "Phone number already in use" });
        }
        let encryptedPassword = yield bcrypt_1.default.hash(password, 10);
        const account = new Account_entity_1.Account();
        account.cin = cin;
        account.name = name;
        account.email = email;
        account.password = encryptedPassword;
        account.adress = adress;
        account.phone = phone;
        try {
            const data = yield data_source_1.AppDataSource.manager.save(account);
            const token = jwt_service_1.Jwtservice.createToken(data.cin);
            return response.status(200).json({ token });
        }
        catch (err) {
            console.log(err);
            return response.status(400).json({ message: "Error" });
        }
    });
}
exports.signupController = signupController;
