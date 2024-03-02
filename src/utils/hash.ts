// import argon from "argon2";

export const hashPassword = (password: string): Promise<string> => {
  return Promise.resolve(password);
  // return argon.hash(password);
};

export const verifyPassword = (
  hash: string,
  password: string
): Promise<boolean> => {
  return Promise.resolve(true);
  // return argon.verify(hash, password);
};
