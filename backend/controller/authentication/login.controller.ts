import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Account } from "../../entity/Account.entity";
import { Jwtservice } from "../../utils/jwt.service";
import bcrypt from "bcrypt";

export async function loginController(request: Request, response: Response) {
  const { email, password } = request.body;
  const accountRepository = AppDataSource.getRepository(Account);

  const account = await accountRepository.findOneBy({
    email,
  });

  if (!account)
    return response.status(404).json({ message: "Account was not found" });
  let validPassword = await bcrypt.compare(password, account.password);
  if (!validPassword)
    return response.status(401).json({ message: "Incorrect password" });
  const token = Jwtservice.createToken(account.cin);
  return response.status(200).json({ token });
}
