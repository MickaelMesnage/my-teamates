"use server";

import { prisma } from "@/lib/prisma";
import { PAGES } from "@/pages";
import { revalidatePath } from "next/cache";

export async function teamDeleteAction(userId: string) {
  await prisma.team.delete({
    where: {
      id: userId,
    },
  });

  revalidatePath(PAGES.teams.list.url);
}
