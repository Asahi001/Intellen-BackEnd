import jwt from "jsonwebtoken";
import { authData } from "../config.js";

export function verifyJwt(token) {
  console.log(authData.jwtSecret, " ........pl");
  const res = jwt.verify(token, authData.jwtSecret);
  return res;
}
