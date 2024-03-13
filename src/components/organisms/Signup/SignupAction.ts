"use server";

import { prisma } from "@/src/lib/prisma";
import { hashPassword } from "@/src/lib/utils/password";
import { PAGES } from "@/src/pages";
import { redirect } from "next/navigation";

export async function signupAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const encodedPassword = await hashPassword(password);

  // TODO Check if email already exists
  // TODO Send email confirmation

  await prisma.user.create({
    data: {
      name,
      email,
      password: encodedPassword,
    },
  });

  redirect(PAGES.auth.signin.url);
}
