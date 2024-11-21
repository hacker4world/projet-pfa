import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Unpaidbills } from "../../entity/Unpaidbills.entity";

export async function bills(
  request: Request,
  response: Response
): Promise<void> {
  const reference = request.params.reference;

  const billsRepository = AppDataSource.getRepository(Unpaidbills);

  if (!reference) {
    response.status(402).send("unauthorized");
    return;
  }
  const unpaidBills = await billsRepository.find({ where: { reference } });

  response.status(200).json({ unpaidBills });
}
