import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Account } from "../../entity/Account.entity";
import bcrypt from "bcrypt";

export async function updateProfile(request: Request, response: Response) {
  const { cin, password, currentPassword } = request.body;

  const accountRepository = AppDataSource.getRepository(Account);

  const account = await accountRepository.findOne({ where: { cin } });

  let correctPassword = await bcrypt.compare(
    currentPassword,
    account!.password
  );

  if (!correctPassword)
    return response.status(401).json({ message: "incorrect password" });

  account!.password = await bcrypt.hash(password, 10);

  await accountRepository.save(account!);

  return response.status(200).json({ message: "password updated" });
}
