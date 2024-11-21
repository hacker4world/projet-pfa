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
exports.stats = void 0;
const data_source_1 = require("../../data-source");
const Unpaidbills_entity_1 = require("../../entity/Unpaidbills.entity");
const Notification_entity_1 = require("../../entity/Notification.entity");
const PendingRequests_entity_1 = require("../../entity/PendingRequests.entity");
const RejectedRequests_entity_1 = require("../../entity/RejectedRequests.entity");
function stats(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let reference = request.params.reference;
        const unpaidBills = data_source_1.AppDataSource.getRepository(Unpaidbills_entity_1.Unpaidbills);
        const notificationsRepository = data_source_1.AppDataSource.getRepository(Notification_entity_1.Notification);
        const pendingRequestsRepository = data_source_1.AppDataSource.getRepository(PendingRequests_entity_1.PendingRequest);
        const rejectedRequestRepository = data_source_1.AppDataSource.getRepository(RejectedRequests_entity_1.RejectedRequest);
        if (!reference) {
            response.status(402).send("unauthorized");
            return;
        }
        const bills = yield unpaidBills.find({ where: { reference } });
        const notifications = yield notificationsRepository.find({
            where: { reference },
        });
        const pendingRequests = yield pendingRequestsRepository.find({
            where: { reference },
        });
        const rejectedRequests = yield rejectedRequestRepository.find({
            where: { reference },
        });
        response.status(200).json({
            unpaidBills: bills.length,
            notifications: notifications.length,
            pendingRequests: pendingRequests.length,
            rejectedRequests: rejectedRequests.length,
        });
    });
}
exports.stats = stats;
