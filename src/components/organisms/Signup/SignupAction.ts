"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/utils/password";
import { URLS } from "@/urls";
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

  redirect(URLS.signin);
}
