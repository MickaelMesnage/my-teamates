"use server";

import { authGuard } from "@/src/guards/authGuard";
import { prisma } from "@/src/lib/prisma";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function gameCreateAction(formData: FormData) {
  const user = await authGuard();

  const { date, time, place, nbPlayers, teamId } = z
    .object({
      date: z.string(),
      time: z.string(),
      place: z.string(),
      nbPlayers: z.string(),
      teamId: z.string(),
    })
    .parse(Object.fromEntries(formData.entries()));

  // if (!parsedData.success) {
  //   throw new Error("Invalid form data");
  // }

  // const { date, time, place, nbPlayers, teamId } = parsedData.data;

  await prisma.game.create({
    data: {
      date: new Date(`${date}T${time}`),
      place,
      nbPlayers: parseInt(nbPlayers),
      teamId,
      participants: {
        connect: [{ id: user.id }],
      },
      adminId: user.id,
    },
  });

  revalidatePath(PAGES.teams.list.url);
}
