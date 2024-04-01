"use server";

import { authGuard } from "@/src/guards/authGuard";
import { canUpdateGameGuard } from "@/src/guards/canUpdateGameGuard";
import { prisma } from "@/src/lib/prisma";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function gameUpdateParticipationAction(formData: FormData) {
  const user = await authGuard();

  const { gameId, hasJoined } = z
    .object({
      gameId: z.string(),
      hasJoined: z.string(),
    })
    .parse(Object.fromEntries(formData.entries()));

  await canUpdateGameGuard(gameId, user.id);

  const joinGame = hasJoined === "true";

  await prisma.game.update({
    where: {
      id: gameId,
    },
    data: {
      participants: {
        ...(joinGame
          ? { connect: [{ id: user.id }] }
          : { disconnect: [{ id: user.id }] }),
      },
    },
  });

  revalidatePath(PAGES.games.list.url);
}
