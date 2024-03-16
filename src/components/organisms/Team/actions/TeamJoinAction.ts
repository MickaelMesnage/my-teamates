"use server";

import { authGuard } from "@/src/guards/authGuard";
import { prisma } from "@/src/lib/prisma";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";

const WRONG_TOKEN_ERROR = "Wrong token error";
const TEAM_ALREADY_JOINED_ERROR = "Team already joined error";

export async function teamJoinAction(formData: FormData) {
  const user = await authGuard();

  const token = formData.get("token") as string;

  console.log({ token });

  const team = await prisma.team.findUnique({
    where: {
      token,
    },
    include: {
      members: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!team) {
    throw new Error(WRONG_TOKEN_ERROR);
  }

  if (team.members.find((member) => member.id === user.id)) {
    throw new Error(TEAM_ALREADY_JOINED_ERROR);
  }

  await prisma.team.update({
    where: {
      id: team.id,
    },
    data: {
      members: {
        connect: [{ id: user.id }],
      },
    },
  });

  revalidatePath(PAGES.teams.list.url);
}
