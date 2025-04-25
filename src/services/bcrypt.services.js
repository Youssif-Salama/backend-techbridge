import bcrypt from "bcrypt";
import env from "dotenv";
env.config();
const bcryptHashingService = async (password) => {
  const salt = await bcrypt.genSalt(parseInt(process.env.SALT) || 10);
  return await bcrypt.hash(password, salt);
};

export const bcryptCompareService = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export default bcryptHashingService;