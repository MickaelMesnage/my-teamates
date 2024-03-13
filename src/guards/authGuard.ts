import { auth } from "@/src/lib/auth";

export const authGuard = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("authGuard: Session not found");
  }

  if (!session.user) {
    throw new Error("authGuard: User not found");
  }

  return session.user;
};
