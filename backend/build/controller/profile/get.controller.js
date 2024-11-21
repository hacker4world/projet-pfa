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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileDetails = void 0;
const data_source_1 = require("../../data-source");
const Account_entity_1 = require("../../entity/Account.entity");
function getProfileDetails(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let { cin } = request.body;
        const accountRepository = data_source_1.AppDataSource.getRepository(Account_entity_1.Account);
        const profile = yield accountRepository.findOne({ where: { cin } });
        return response.status(200).json({ profile });
    });
}
exports.getProfileDetails = getProfileDetails;
