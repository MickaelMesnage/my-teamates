"use server";

import { getRequiredUser } from "@/src/lib/getRequiredUser";
import { prisma } from "@/src/lib/prisma";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";

export async function teamLeaveAction(teamId: string) {
  const user = await getRequiredUser();

  await prisma.team.update({
    where: {
      id: teamId,
    },
    data: {
      members: {
        disconnect: [{ id: user.id }],
      },
    },
  });

  revalidatePath(PAGES.teams.list.url);
}
