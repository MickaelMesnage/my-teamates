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

  revalidatePath(URLS.teamsList);
}
