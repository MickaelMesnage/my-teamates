import { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & { id: string };
  }
}
