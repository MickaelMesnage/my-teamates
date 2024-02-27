"use server";

import { authGuard } from "@/guards/authGuard";
import { prisma } from "@/lib/prisma";
import { urls } from "@/urls";
import { redirect } from "next/navigation";

export async function teamCreateAction(formData: FormData) {
  const user = await authGuard();

  const name = formData.get("name") as string;

  await prisma.team.create({
    data: {
      name,
      members: {
        connect: [{ id: user.id }],
      },
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  redirect(urls.teams.list);
}
