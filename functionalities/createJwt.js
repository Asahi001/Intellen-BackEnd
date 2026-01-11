import jwt from "jsonwebtoken";
import crypto from "crypto";
import { authData } from "../config.js";

// // Generate a 32-byte (256-bit) secret key
// const secretKey = crypto.randomBytes(32).toString("hex");
// console.log("Secret Key:", secretKey);

// Base64 Format
function generateSecretKey() {
  const secretKey = crypto.randomBytes(64).toString("base64");
  return secretKey;
}

// Create token (bydefault expiry in 1 hour)
export function createJwt(data, expiry = "1m") {
  const SECRET_KEY = generateSecretKey();
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: expiry });
  authData.jwtToken = token;
  authData.jwtSecret = SECRET_KEY;
  return token;
}
