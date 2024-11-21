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
exports.bills = void 0;
const data_source_1 = require("../../data-source");
const Unpaidbills_entity_1 = require("../../entity/Unpaidbills.entity");
function bills(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const reference = request.params.reference;
        const billsRepository = data_source_1.AppDataSource.getRepository(Unpaidbills_entity_1.Unpaidbills);
        if (!reference) {
            response.status(402).send("unauthorized");
            return;
        }
        const unpaidBills = yield billsRepository.find({ where: { reference } });
        response.status(200).json({ unpaidBills });
    });
}
exports.bills = bills;
