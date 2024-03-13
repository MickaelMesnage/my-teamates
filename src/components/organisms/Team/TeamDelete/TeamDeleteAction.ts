"use server";

import { prisma } from "@/src/lib/prisma";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";

export async function teamDeleteAction(teamId: string) {
  await prisma.team.delete({
    where: {
      id: teamId,
    },
  });

  revalidatePath(PAGES.teams.list.url);
}
