import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const jwtEncodingService = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "1d" })
};

export const jwtDecodingService = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export default jwtEncodingService