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
exports.getPendingRequests = void 0;
const data_source_1 = require("../../data-source");
const PendingRequests_entity_1 = require("../../entity/PendingRequests.entity");
function getPendingRequests(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const reference = request.params.reference;
        const pendingRequestsRepository = data_source_1.AppDataSource.getRepository(PendingRequests_entity_1.PendingRequest);
        const pendingRequests = yield pendingRequestsRepository.find({
            where: { reference },
        });
        console.log(pendingRequests);
        return response.status(200).json({ pendingRequests });
    });
}
exports.getPendingRequests = getPendingRequests;
