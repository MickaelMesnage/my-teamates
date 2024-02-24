import { prisma } from "@/lib/prisma";

export const TeamList = async () => {
  const teamList = await prisma.team.findMany();

  return (
    <div>
      <h1>Team List</h1>
      <ul>
        {teamList.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};
