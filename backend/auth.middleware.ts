import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
const jwtKey = fs.readFileSync("jwt.key", "utf8");

export function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = request.headers["authorization"];

  if (!token) {
    return response.status(401).send("Not logged in");
  }

  jwt.verify(
    token,
    jwtKey,
    { algorithms: ["RS256"] },
    function (err, decoded: any) {
      if (err) return response.status(401).send("token invalid");
      request.body.cin = decoded!.cin;
      next();
    }
  );
}
