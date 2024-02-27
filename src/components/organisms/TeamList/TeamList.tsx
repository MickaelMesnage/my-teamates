import { TeamDeleteButton } from "@/components/organisms/TeamDeleteButton/TeamDeleteButton";
import { prisma } from "@/lib/prisma";

export const TeamList = async () => {
  const teamList = await prisma.team.findMany();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  teamList.map((team) => {});
  return (
    <ul>
      {teamList.map((team) => (
        <>
          <li key={team.id}>{team.name}</li>
          <TeamDeleteButton teamId={team.id} />
        </>
      ))}
    </ul>
  );
};
