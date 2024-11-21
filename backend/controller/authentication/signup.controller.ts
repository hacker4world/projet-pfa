import { Request, Response } from "express";
import { Account } from "../../entity/Account.entity";
import { AppDataSource } from "../../data-source";
import { Jwtservice } from "../../utils/jwt.service";
import bcrypt from "bcrypt";

export async function signupController(request: Request, response: Response) {
  const { cin, name, email, password, adress, phone } = request.body;

  const accountRepository = AppDataSource.getRepository(Account);

  const existingAccount = await accountRepository.findOne({
    where: [{ email }, { cin }, { phone }],
  });

  if (existingAccount) {
    if (existingAccount.email == email)
      return response.status(400).json({ message: "Email already in use" });
    if (existingAccount.cin == cin)
      return response
        .status(400)
        .json({ message: "Cin number already in use" });
    if (existingAccount.phone == phone)
      return response
        .status(400)
        .json({ message: "Phone number already in use" });
  }

  let encryptedPassword = await bcrypt.hash(password, 10);
  const account = new Account();
  account.cin = cin;
  account.name = name;
  account.email = email;
  account.password = encryptedPassword;
  account.adress = adress;
  account.phone = phone;

  try {
    const data = await AppDataSource.manager.save(account);
    const token = Jwtservice.createToken(data.cin);
    return response.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return response.status(400).json({ message: "Error" });
  }
}
