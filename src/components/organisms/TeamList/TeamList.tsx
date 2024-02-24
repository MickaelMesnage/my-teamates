import { prisma } from "@/lib/prisma";

export const TeamList = async () => {
  const teamList = await prisma.team.findMany();
  await new Promise((resolve) => setTimeout(resolve, 5000));

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
