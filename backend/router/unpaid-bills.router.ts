import { Router } from "express";
import { bills } from "../controller/unpaid-bills/bills.router";

export const unpaidBills = Router();

unpaidBills.get("/bills/:reference", bills);
