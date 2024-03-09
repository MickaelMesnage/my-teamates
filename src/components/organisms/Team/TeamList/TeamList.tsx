import { TeamListCard } from "@/components/organisms/Team/TeamList/TeamListCard";
import { getRequiredUser } from "@/lib/getRequiredUser";
import { prisma } from "@/lib/prisma";

export const TeamList = async () => {
  const user = await getRequiredUser();

  const teamList = await prisma.team.findMany({
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
    <ul className="grid grid-cols-1 gap-4">
      {teamList.map((team) => (
        <div key={team.id}>
          <li>
            <TeamListCard
              members={team.members}
              name={team.name}
              teamId={team.id}
              teamToken={team.token}
              canDeleteTeam={team.adminId === user.id}
            />
          </li>
        </div>
      ))}
    </ul>
  );
};
