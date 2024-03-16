import { getRequiredUser } from "@/src/lib/getRequiredUser";
import { prisma } from "@/src/lib/prisma";

export const getTeamList = async () => {
  // const teamList = await teamService.list();
  const user = await getRequiredUser();

  const teamList = await prisma.team.findMany({
    where: {
      members: {
        some: {
          id: user.id,
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
      name: name || "John doe",
      email: email || "johndoe@email.com",
    })),
    canDeleteTeam: rest.adminId === user.id,
    canLeaveTeam: rest.adminId !== user.id,
    canShareTeam: true,
  }));
};
