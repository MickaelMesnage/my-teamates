import { auth } from "@/src/lib/auth";
import { PAGES } from "@/src/pages";
import { redirect } from "next/navigation";

export const userConnectedGuard = async () => {
  const session = await auth();

  if (!session || !session.user) {
    redirect(PAGES.home.url);
    return;
  }

  return session.user;
};
