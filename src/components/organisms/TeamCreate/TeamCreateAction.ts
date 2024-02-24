"use server";

import { prisma } from "@/lib/prisma";
import { urls } from "@/urls";
import { redirect } from "next/navigation";

export async function teamCreateAction(formData: FormData) {
  await prisma.team.create({
    data: {
      name: formData.get("name") as string,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  redirect(urls.teams.list);
}
