import { prisma } from "@/src/lib/prisma";
import { verifyPassword } from "@/src/lib/utils/password";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { z } from "zod";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be set");
}

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const dataParsed = z
          .object({ email: z.string(), password: z.string() })
          .safeParse(credentials);

        if (!dataParsed.success) {
          throw new Error("CredentialsProvider: Invalid credentials provided");
        }

        const { email, password } = dataParsed.data;

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!user?.password) {
          throw new Error("CredentialsProvider: No password found for user");
        }

        const isPasswordValid =
          user && (await verifyPassword(user.password, password));

        if (!isPasswordValid) {
          throw new Error("CredentialsProvider: Error validating password");
        }

        return user;
      },
    }),
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: "jwt",
  },
});
