import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Account } from "../../entity/Account.entity";

export async function getProfileDetails(request: Request, response: Response) {
  let { cin } = request.body;

  const accountRepository = AppDataSource.getRepository(Account);

  const profile = await accountRepository.findOne({ where: { cin } });

  return response.status(200).json({ profile });
}
