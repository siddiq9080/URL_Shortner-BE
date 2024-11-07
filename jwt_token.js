import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const jwttoken = (payload, expiry) => {
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: expiry });
};
