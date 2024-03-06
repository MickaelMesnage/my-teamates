import { TeamDeleteButton } from "@/components/organisms/Team/TeamDelete/TeamDeleteButton";
import { prisma } from "@/lib/prisma";

export const TeamList = async () => {
  const teamList = await prisma.team.findMany({
    include: {
      members: {
        select: {
          image: true,
          id: true,
        },
      },
    },
  });

  return (
    <ul>
      {teamList.map((team) => (
        <div key={team.id}>
          <li>
            <span>{team.name}</span>
            {team.members.map((member) => (
              <img
                className="size-12 rounded-full"
                key={member.id}
                src={member.image || undefined}
              />
            ))}
          </li>
          <TeamDeleteButton teamId={team.id} />
        </div>
      ))}
    </ul>
  );
};
