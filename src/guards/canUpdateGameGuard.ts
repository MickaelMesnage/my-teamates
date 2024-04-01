import { prisma } from "@/src/lib/prisma";

export const canUpdateGameGuard = async (gameId: string, userId: string) => {
  const team = await prisma.team.findFirst({
    where: {
      members: {
        some: {
          id: userId,
        },
      },
      games: {
        some: {
          id: gameId,
        },
      },
    },
  });

  if (!team) {
    throw new Error("No right to update this game");
  }

  return;
};
