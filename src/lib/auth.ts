import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be set");
}

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
});

export const getAuthSession = () => auth();

export const getRequiredAuthSession = () => {
  const session = getAuthSession();

  if (!session) {
    throw new Error("getRequiredAuthSession: Session not found");
  }
  return session;
};

// export const getAuthSession = () => {
//   return getServerSession(authConfig);
// };

// export const getRequiredAuthSession = () => {
//   const session = getAuthSession();

//   if (!session) {
//     throw new Error("getRequiredAuthSession: Session not found");
//   }
//   return session;
// };
