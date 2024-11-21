"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Account_entity_1 = require("./entity/Account.entity");
const Subscription_entity_1 = require("./entity/Subscription.entity");
const Unpaidbills_entity_1 = require("./entity/Unpaidbills.entity");
const Notification_entity_1 = require("./entity/Notification.entity");
const PendingRequests_entity_1 = require("./entity/PendingRequests.entity");
const RejectedRequests_entity_1 = require("./entity/RejectedRequests.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "sonede",
    entities: [Account_entity_1.Account, Subscription_entity_1.Subscription, Unpaidbills_entity_1.Unpaidbills, Notification_entity_1.Notification, PendingRequests_entity_1.PendingRequest, RejectedRequests_entity_1.RejectedRequest],
    synchronize: true,
    logging: false,
});
