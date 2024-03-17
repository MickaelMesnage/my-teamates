"use server";

import { getRequiredUser } from "@/src/lib/getRequiredUser";
import { prisma } from "@/src/lib/prisma";

export async function getTeams() {
  const user = await getRequiredUser();

  const teamList = await prisma.team.findMany({
    where: {
      members: {
        some: {
          id: user.id,
        },
      },
    },
  });

  return teamList;
}
