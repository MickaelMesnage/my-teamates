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
      participants: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  console.log(gameList);

  return gameList.map(({ participants, ...rest }) => ({
    ...rest,
    participants: participants.map(({ id, name, image }) => ({
      id,
      name: name || "John doe",
      image,
    })),
    hasJoined: participants.some(({ id }) => id === user.id),
    canJoined: !participants.some(({ id }) => id === user.id),
  }));
};
