import { TeamListCard } from "@/src/components/organisms/Team/TeamList/TeamListCard";
import { getRequiredUser } from "@/src/lib/getRequiredUser";
import { prisma } from "@/src/lib/prisma";

export const TeamList = async () => {
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

  return (
    <ul className="flex flex-col gap-4">
      {teamList.map((team) => (
        <div key={team.id}>
          <li>
            <TeamListCard
              members={team.members}
              name={team.name}
              teamId={team.id}
              teamToken={team.token}
              canDeleteTeam={team.adminId === user.id}
              canLeaveTeam={team.adminId !== user.id}
              canShareTeam={true}
            />
          </li>
        </div>
      ))}
    </ul>
  );
};
