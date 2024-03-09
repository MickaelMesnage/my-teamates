import { auth } from "@/lib/auth";

export const getRequiredUser = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("getRequiredUser: Session not found");
  }

  if (!session.user) {
    throw new Error("getRequiredUser: User not found");
  }

  return session.user;
};
