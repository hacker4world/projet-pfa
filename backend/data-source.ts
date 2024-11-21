import "reflect-metadata";
import { DataSource } from "typeorm";
import { Account } from "./entity/Account.entity";
import { Subscription } from "./entity/Subscription.entity";
import { Unpaidbills } from "./entity/Unpaidbills.entity";
import { Notification } from "./entity/Notification.entity";
import { PendingRequest } from "./entity/PendingRequests.entity";
import { RejectedRequest } from "./entity/RejectedRequests.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "sonede",
  entities: [Account, Subscription, Unpaidbills, Notification, PendingRequest, RejectedRequest],
  synchronize: true,
  logging: false,
});
