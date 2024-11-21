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
exports.deleteSubscription = void 0;
const data_source_1 = require("../../data-source");
const Subscription_entity_1 = require("../../entity/Subscription.entity");
function deleteSubscription(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const reference = request.params.reference;
        const subscriptionRepository = data_source_1.AppDataSource.getRepository(Subscription_entity_1.Subscription);
        yield subscriptionRepository.delete(reference);
        return response.status(200).json({ message: "subscription deleted" });
    });
}
exports.deleteSubscription = deleteSubscription;
