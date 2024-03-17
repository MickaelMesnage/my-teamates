"use server";

import { authGuard } from "@/src/guards/authGuard";
import { prisma } from "@/src/lib/prisma";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";

export async function gameCreateAction(formData: FormData) {
  const user = await authGuard();

  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const place = formData.get("place") as string;
  const nbPlayers = formData.get("nbPlayers") as string;
  const teamId = formData.get("teamId") as string;

  console.log({ date, time, place });

  await prisma.game.create({
    data: {
      date: new Date(`${date}T${time}`),
      place,
      nbPLayers: parseInt(nbPlayers),
      teamId,
      participants: {
        connect: [{ id: user.id }],
      },
      adminId: user.id,
    },
  });

  revalidatePath(PAGES.teams.list.url);
}
