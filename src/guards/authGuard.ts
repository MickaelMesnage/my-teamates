import { auth } from "@/lib/auth";
import { getSession } from "next-auth/react";

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

export const authSessionGuard = async () => {
  const session = await getSession();

  if (!session) {
    throw new Error("authGuard: Session not found");
  }

  return session;
};
