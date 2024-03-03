import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};

export const verifyPassword = async (
  hashPassword: string,
  password: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};
