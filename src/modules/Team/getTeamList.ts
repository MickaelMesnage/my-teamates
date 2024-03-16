import { prisma } from "@/src/lib/prisma";

export const getTeamListOfUser = async (userId: string) => {
  const teamList = await prisma.team.findMany({
    where: {
      members: {
        some: {
          id: userId,
        },
      },
    },
    include: {
      members: {
        select: {
          image: true,
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return teamList.map(({ members, ...rest }) => ({
    ...rest,
    members: members.map(({ image, id, name, email }) => ({
      image,
      id,
      name,
      email,
    })),
  }));
};
