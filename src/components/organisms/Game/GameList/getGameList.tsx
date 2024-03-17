import { getRequiredUser } from "@/src/lib/getRequiredUser";
import { prisma } from "@/src/lib/prisma";

export const getGameList = async () => {
  const user = await getRequiredUser();

  const gameList = await prisma.game.findMany({
    where: {
      team: {
        members: {
          some: {
            id: user.id,
          },
        },
      },
    },
    include: {
      team: {
        select: {
          id: true,
          name: true,
          members: {
            select: {
              id: true,
              name: true,
              image: true,
              email: true,
            },
          },
        },
      },
    },
  });

  return gameList;
};
