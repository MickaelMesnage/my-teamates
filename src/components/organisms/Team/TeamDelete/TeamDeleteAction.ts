"use server";

import { prisma } from "@/lib/prisma";
import { URLS } from "@/urls";
import { revalidatePath } from "next/cache";

export async function teamDeleteAction(userId: string) {
  await prisma.team.delete({
    where: {
      id: userId,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  revalidatePath(URLS.teamsList);
}