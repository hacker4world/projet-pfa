import jwt from "jsonwebtoken";
import fs from "fs";

export abstract class Jwtservice {
  public static createToken(cin: string): string {
    const key = fs.readFileSync("jwt.key");
    const token = jwt.sign({ cin }, key, {
      algorithm: "RS256",
      expiresIn: "60m",
    });
    return token;
  }
}
