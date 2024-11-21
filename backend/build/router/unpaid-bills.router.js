"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpaidBills = void 0;
const express_1 = require("express");
const bills_router_1 = require("../controller/unpaid-bills/bills.router");
exports.unpaidBills = (0, express_1.Router)();
exports.unpaidBills.get("/bills/:reference", bills_router_1.bills);
