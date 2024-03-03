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

  console.log({
    teamList,
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));

  teamList.map((team) => {});
  return (
    <ul>
      {teamList.map((team) => (
        <>
          <li key={team.id}>
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
        </>
      ))}
    </ul>
  );
};